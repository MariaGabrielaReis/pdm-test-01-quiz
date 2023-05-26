import 'package:flutter/material.dart';

class Final extends StatelessWidget {
  final List<String> techs;

  const Final({ Key? key, required this.techs }): super(key: key);

  @override
  Widget build(BuildContext context) {
    final tenPercentOfScreen = (MediaQuery.of(context).size.width / 100) * 10;

    return Scaffold(
      appBar: AppBar(title: const Text('Tecnologias selecionadas')),
      body: Padding(
        padding: EdgeInsets.symmetric(
          vertical: tenPercentOfScreen/2,
          horizontal: tenPercentOfScreen > 64 ? tenPercentOfScreen * 1.5 : tenPercentOfScreen,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [ 
            ListView.separated(
              shrinkWrap: true,
              physics: ClampingScrollPhysics(), 
              itemCount: techs.length,
              separatorBuilder: (_, int index) =>  const SizedBox(height: 4.0),
              itemBuilder: (_, int index) {
                return Text(
                  techs[index], 
                  textAlign: TextAlign.center, 
                  style: TextStyle(fontSize:  16.0),
                );
              },
            ),  
            const SizedBox(height: 16.0),
            Text(
              'Informações enviadas ao servidor', 
              style: TextStyle(fontSize: 14.0, color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }
}