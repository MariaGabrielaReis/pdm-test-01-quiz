
import 'package:flutter/material.dart';
import 'package:flutter_app/screens/form.dart';
import 'package:flutter_app/ui/input.dart';

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override  
  State<StatefulWidget> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final _formKey = GlobalKey<FormState>();
  var login = '', password = '', errorMessage = '';

  void _sendForm() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();

      if(login != 'teste' || password != '123') {
        setState(() { errorMessage = "Acesso não permitido"; });
      } else {
        Navigator.push(
          context, 
          MaterialPageRoute(builder: (context) => FormPage()),
        );
      }     
    }
  }

  @override
  Widget build(BuildContext context) {
    final tenPercentOfScreen = (MediaQuery.of(context).size.width / 100) * 10;

    return Scaffold(
      body: Padding(
        padding: EdgeInsets.symmetric(
          vertical: tenPercentOfScreen/2,
          horizontal: tenPercentOfScreen > 64 ? tenPercentOfScreen * 1.5 : tenPercentOfScreen,
        ),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Avaliação', style: const TextStyle(fontSize: 18.0, color: Colors.teal)),
              const SizedBox(height: 32.0),
              Input(onSaved: (String value) => login = value),
              const SizedBox(height: 8.0),
              Input(
                inputType: InputType.password,
                onSaved: (String value) => password = value,
              ),
              const SizedBox(height: 16.0),
              errorMessage.length > 0 ? Column(children: [
                Text(errorMessage, style: const TextStyle(fontSize: 12.0, color: Colors.red)),
                const SizedBox(height: 16.0),
              ]) : SizedBox.shrink(),
              SizedBox(
                width: double.infinity,
                height: 36.0,
                child: ElevatedButton(child: const Text('Entrar'), onPressed: () => _sendForm()),
              ),
            ],
          ),
        ),
      ),
    );
  }
}