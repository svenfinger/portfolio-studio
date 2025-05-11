import { StructureBuilder } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { DocumentsIcon } from '@sanity/icons';
import { CogIcon } from '@sanity/icons';

export const structure = (S: StructureBuilder, context: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Configuration')
        .icon(CogIcon)
        .child(
          S.editor().id('configuration').schemaType('configuration').documentId('configuration'),
        ),
      orderableDocumentListDeskItem({
        type: 'page',
        title: 'Pages',
        icon: DocumentsIcon,
        S,
        context,
      }),
      S.documentTypeListItem('work').title('Work'),
    ]);
