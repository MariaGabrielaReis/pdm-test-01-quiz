import 'package:flutter/material.dart';
import 'package:flutter_app/screens/signin.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Avaliação',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: SignIn(),
    );
  }
}