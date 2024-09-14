import 'package:flutter/material.dart';

class RatingGamePage extends StatefulWidget {
  const RatingGamePage({super.key});

  @override
  State<RatingGamePage> createState() => _RatingGamePageState();
}

class _RatingGamePageState extends State<RatingGamePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Dê uma nota pra foto',
        ),
      ),
      body: SafeArea(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Center(
            child: Container(
              // decoration: BoxDecoration(
              //   border: Border.all(
              //       color: Colors.blueAccent,
              //       width: 4), // Cor e largura da borda
              //   borderRadius: BorderRadius.circular(20), // Borda arredondada
              // ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(16), //
                child: Image.network(
                  'https://picsum.photos/id/237/350/350',
                  width: 350,
                  height: 350,
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: 350,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Ícone X vermelho redondo
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    shape: CircleBorder(), // Forma circular
                    backgroundColor: Colors.red,
                    // primary: Colors.red,   // Cor de fundo vermelha
                    padding: EdgeInsets.all(20), // Tamanho do botão
                  ),
                  onPressed: () {
                    // Ação do botão
                  },
                  child: Icon(
                    Icons.close, // Ícone X
                    color: Colors.white, // Cor do ícone
                  ),
                ),
                SizedBox(width: 20), // Espaçamento entre os itens

                // Lista de 5 botões de estrela
                Container(
                  decoration: BoxDecoration(
                    color: Colors.grey[100],
                    borderRadius:
                        BorderRadius.circular(30), // Borda arredondada
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: List.generate(5, (index) {
                        return IconButton(
                          padding: EdgeInsets.all(0), // Remove padding
                          constraints: BoxConstraints(),
                          icon: Icon(
                            size: 36,
                            Icons.star_border, // Estrela vazada
                            color: Colors.amber, // Cor amarela para a estrela
                          ),
                          onPressed: () {
                            // Ação para cada estrela
                          },
                        );
                      }),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      )),
    );
  }
}
