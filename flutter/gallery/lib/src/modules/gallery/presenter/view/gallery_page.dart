import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:gallery/gen/assets.gen.dart';
import 'package:gallery/src/modules/gallery/data/datasources/gallery_cards_datasource.dart';
import 'package:gallery/src/modules/gallery/gallery_module.dart';
import 'package:gallery/src/modules/gallery/presenter/bloc/grid/gallery_grid_bloc.dart';
import 'package:gallery/src/modules/gallery/presenter/bloc/page/gallery_page_bloc.dart';
import 'package:gallery/src/modules/gallery/presenter/bloc/page/gallery_page_events.dart';
import 'package:gallery/src/modules/games/rating/main.dart';
import 'package:gallery/src/utils/constants.dart';
import 'package:skeletonizer/skeletonizer.dart';
import '../../../kennel/domain/usecases/on_redirect_contact_usecase.dart';
import '../bloc/grid/gallery_grid_states.dart';
import '../bloc/page/gallery_page_states.dart';
import '../components/gallery_body.dart';

enum PageStates {
  loading,
  bottomReached,
  idle,
  error,
}

enum Pages {
  gallery,
  adoption,
  games,
}

class GalleryPage extends StatefulWidget {
  const GalleryPage({super.key});

  @override
  State<GalleryPage> createState() => _GalleryPageState();
}

class _GalleryPageState extends State<GalleryPage> {
  final bloc = GalleryPageBloc(
    GalleryPageLoadingState(),
    gridBloc: GalleryGridBloc(
      const GalleryGridUpdateCards([]),
      datasource: galleryIoC.get<GalleryCardsDatasource>(),
    ),
  );

  PageStates currentState = PageStates.loading;

  Pages page = Pages.gallery;

  @override
  void initState() {
    bloc.add(LoadGridGalleryPageEvent());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final forSaleBody = BlocBuilder<GalleryPageBloc, GalleryPageState>(
      bloc: bloc,
      builder: (context, state) {
        if (state is GalleryPageLoadingState) {
          return const Center(
            child: CupertinoActivityIndicator(),
          );
        } else if (state is GalleryPageFailureState) {
          return GalleryPageErrorWidget(
            state.toString(),
            onAction: () => bloc.add(
              LoadGridGalleryPageEvent(),
            ),
          );
        } else {
          return SizedBox(
            height: double.maxFinite,
            child: GalleryBody(
              bloc: bloc.gridBloc,
            ),
          );
        }
      },
    );

    Widget forAdoptionBody = const Center(
      child: Text('Nenhum Pet disponível para adoção no momento!'),
    );

    final gamesBody = Column(

      children: [
        const SizedBox(
          child: Row(children: [
            Text('Pontos adquiridos:')
          ],),
        ),
        Expanded(
          child: GridView(
            shrinkWrap: true,
            gridDelegate:
                const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
            children: [
              IconButton(
                iconSize: 48,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const RatingGamePage(),
                    ),
                  );
                },
                icon: const Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [Icon(Icons.hotel_class), Text('Nota 5')],
                ),
                color: Colors.yellow,
              )
            ],
          ),
        ),
      ],
    );

    var body;
    var title;

    switch (page) {
      case Pages.gallery:
        title = 'Filhotes disponíveis';
        body = forSaleBody;
        break;
      case Pages.adoption:
        title = 'Adote';
        body = forAdoptionBody;
        break;
      case Pages.games:
        title = 'Jogos';
        body = gamesBody;
        break;
    }

    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: Pages.values.indexOf(page),
        onTap: (value) => setState(() {
          page = Pages.values[value];
        }),
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.pets),
            label: 'Comprar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.handshake),
            label: 'Adotar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.sports_esports),
            label: 'Jogos',
          )
        ],
      ),
      appBar: CupertinoNavigationBar(
        trailing: Tooltip(
          // O google anvisou que está faltando suporte para screen readers para acessibilidade
          message: 'Pedir ajuda ao suporte pelo WhatsApp',
          child: IconButton(
            icon: const Icon(Icons.support_agent),
            onPressed: () async {
              await OnRedirectContactUsecase().launchWhatsapp(
                context,
                supportWhatsAppDefaultNumber,
                'Oi, preciso de ajuda com o App!',
              );
            },
          ),
        ),
        leading: Assets.icons.logo512Png.image(
          height: 32,
          width: 32,
          scale: 1,
        ),
        middle: Text(title),
      ),
      body: SafeArea(
        child: body,
      ),
    );
  }
}

class GalleryPageErrorWidget extends StatelessWidget {
  final String text;
  final VoidCallback onAction;

  const GalleryPageErrorWidget(
    this.text, {
    required this.onAction,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 18.0),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              text,
              textAlign: TextAlign.center,
            ),
            CupertinoButton(
              onPressed: onAction,
              child: const Text('Tentar novamente'),
            ),
          ],
        ),
      ),
    );
  }
}

class GalleryPageLoadingWidget extends StatelessWidget {
  const GalleryPageLoadingWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Skeletonizer(
      enabled: true,
      child: GridView(
        // itemCount: 3 * 3 * 2,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          childAspectRatio: 1,
          crossAxisCount: 3,
          mainAxisSpacing: 5,
          crossAxisSpacing: 5,
        ),
        padding: const EdgeInsets.symmetric(horizontal: 2),
        shrinkWrap: true,
        primary: false,
        children: List.generate(
          3 * 3 * 2,
          (i) => Container(
            decoration: BoxDecoration(
              color: Colors.grey.shade200,
              borderRadius: const BorderRadius.all(
                Radius.circular(5),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
