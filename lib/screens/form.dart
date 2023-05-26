import 'package:flutter/material.dart';
import 'package:flutter_app/screens/final.dart';
import 'package:flutter_app/ui/checkbox.dart' as Custom;

class Question {
  final String label;
  final List<String> alternatives;
  final String answer;
  String group;
  Color color;

  Question({ 
    required this.label, 
    required this.group, 
    required this.alternatives,
    required this.answer,
    this.color = Colors.grey
  });
}

class FormPage extends StatefulWidget {
  const FormPage({super.key});

  @override  
  State<StatefulWidget> createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final List<String> techs = ['Flutter', 'React' 'Native', 'Kotlin', 'Java', 'Ionic'];
  List<String> selectedTechs = [];

  void _addTech(String tech) {
    final filterIndex = selectedTechs.indexOf(tech);
    filterIndex > -1
      ? selectedTechs.remove(tech)
      : selectedTechs.add(tech);
  }

  void _send() {
    if(selectedTechs.length == 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: const Text('Escolha ao menos uma opção!')),
      );
    } else {
      Navigator.push(
        context, 
        MaterialPageRoute(builder: (context) => Final(techs: selectedTechs)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final fivePercentOfScreen = (MediaQuery.of(context).size.width / 100) * 5;

    return Scaffold(
      appBar: AppBar(title: const Text('Tecnologias Mobile'), centerTitle: true, automaticallyImplyLeading: false),
      body: SingleChildScrollView(
        padding: EdgeInsets.only(
          bottom: fivePercentOfScreen,
          right: fivePercentOfScreen > 64 ? fivePercentOfScreen * 1.5 : fivePercentOfScreen,
          left: fivePercentOfScreen > 64 ? fivePercentOfScreen * 1.5 : fivePercentOfScreen,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 16.0),
            Text('Indique quais tecnologias de desenvolvimento mobile você conhece:', style: TextStyle(fontSize: 16.0)),
            const SizedBox(height: 8.0),
            Column(
              children: techs.map((tech) {
                var isChecked = selectedTechs.indexOf(tech) > -1;      
                return Custom.Checkbox(
                  label: tech, 
                  isChecked: isChecked, 
                  onPress: () {
                    _addTech(tech);
                    setState(() { isChecked = !isChecked; });                  
                  }
                );
              }).toList(),
            ),
            const SizedBox(height: 16.0),
            const Divider(), 
            const SizedBox(height: 16.0),
            SizedBox(
              height: 32.0,
              width: MediaQuery.of(context).size.width,
              child: ElevatedButton(
                onPressed: () => _send(), 
                child: const Text('Enviar'),
              ),
            ), 
          ],
        ),
      ),
    );
  }
}