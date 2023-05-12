
import 'package:flutter/material.dart';
import 'package:flutter_app/ui/radio_button.dart' as Custom;

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
  final _formKey = GlobalKey<FormState>();

  void _select(String alternative, int index) {
    setState(() {
      questions[index].group = alternative;
    });
  }

  void _send() {
    bool isIncomplete = false;
    for (int i = 0; i < questions.length; i++) {
      if(questions[i].group.length < 1) {
        isIncomplete = true;
        ScaffoldMessenger
          .of(context)
          .showSnackBar(
            const SnackBar(content: const Text('Responda todas as questões!')),
          );
        break;
      }
    } 

    if(!isIncomplete) {
      questions.forEach((question) => {
        if(question.group == question.answer) {
          setState(() {
            question.color = Colors.green;
          })
        } else {
          setState(() {
            question.color = Colors.red;
          })
        }
      });
    }
  }

  final questions = [
    Question(
      label: 'Qual a Taxa Selic do Brasil atualmente?',
      group: '',
      alternatives: [
        '-20,25% a.a',
        '122,15% a.a',
        '13,75% a.a',
        '3% a.a',
      ],
      answer: '13,75% a.a',
    ),
    Question(
      label: 'Quem decide aumentar ou diminuir a Taxa Selic?',
      group: '',
      alternatives: [
        'O presidente',
        'Banco Central',
        'Governos Estaduais',
        'Xuxa',
      ],
      answer: 'Banco Central',
    ),
    Question(
      label: 'Qual desses ativos não é considerado de "Renda Variável"?',
      group: '',
      alternatives: [
        'CDB 100% do CDI',
        'Criptomoedas',
        'Fundos Imobiliários',
        'Ações',
      ],
      answer: 'CDB 100% do CDI',
    ),
    Question(
      label: 'Se existe uma carteira que só contém ativos de Renda Fixa e dinheiro em caixa, qual o perfil desta carteira?',
      group: '',
      alternatives: [
        'Medroso',
        'Moderado',
        'Arrojado',
        'Ultra-conservador',
      ],
      answer: 'Ultra-conservador',
    ),
    Question(
      label: 'Qual dos produtos abaixo tem como princípio superar a inflação?',
      group: '',
      alternatives: [
        'Agiotagem',
        'CDB IPCA + 6%',
        'REITs e Stocks',
        'Consórcio',
      ],
      answer: 'CDB IPCA + 6%',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final fivePercentOfScreen = (MediaQuery.of(context).size.width / 100) * 5;

    return Scaffold(
      appBar: AppBar(title: const Text('Quiz sobre economia')),
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
            Form(
              key: _formKey,
              child: ListView.separated(
                shrinkWrap: true,
                physics: ClampingScrollPhysics(), 
                itemCount: questions.length,
                separatorBuilder: (_, int index) => Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16.0),
                  child: const Divider(),
                ),
                itemBuilder: (_, int index) {
                  final question = questions[index];

                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        question.label, 
                        style: TextStyle(
                          fontSize: 16.0, 
                          color: questions[index].color == Colors.grey ? Colors.grey.shade800 : questions[index].color,
                        ),
                      ),
                      const SizedBox(height: 8.0),
                      ListView.builder(
                        shrinkWrap: true,
                        physics: ClampingScrollPhysics(), 
                        itemCount: question.alternatives.length,
                        itemBuilder: (_, int alternativeIndex) {
                          final alternative = questions[index].alternatives[alternativeIndex];

                          return Custom.RadioButton(
                            label: alternative, 
                            isChecked: questions[index].group == alternative,
                            group: questions[index].group, 
                            onPress: () =>  _select(alternative, index),
                            color: questions[index].color
                          );
                        },
                      ),  
                    ],
                  );
                },
              ),
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