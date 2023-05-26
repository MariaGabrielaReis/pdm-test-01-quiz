import 'package:flutter/material.dart';

enum InputType { login, password }

class Input extends StatefulWidget {
  final void Function(String value) onSaved; 
  final InputType inputType;

  const Input({ 
    Key? key, 
    required this.onSaved,
    this.inputType = InputType.login,
  }) : super(key: key);

  @override  
   State<StatefulWidget> createState() => _InputState();
}

class _InputState extends State<Input> {
  @override
  Widget build(BuildContext context) {
    final isPassword = widget.inputType == InputType.password;
    var inputKeyboardType = TextInputType.text;
    if(isPassword) inputKeyboardType = TextInputType.visiblePassword;

    return TextFormField(
      onSaved: (String? value) => widget.onSaved(value ?? ''),
      keyboardType: inputKeyboardType,
      decoration: InputDecoration(
        hintText: isPassword ? 'Digite sua senha' : 'Digite seu login', 
        border: OutlineInputBorder(),
        label: Text(isPassword ? 'Senha' : 'Login'),
        focusedBorder: const OutlineInputBorder(borderSide: BorderSide(color: Colors.teal)),
        prefixIcon: isPassword ? Icon(Icons.lock_outline) : Icon(Icons.email_outlined),
      ),
      obscureText: isPassword,
      validator: (String? value) {
        if (value?.length == 0) return "Campo obrigatório";
      },
    );
  }
}