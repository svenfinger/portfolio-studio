import { StructureBuilder } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const structure = (S: StructureBuilder, context: any) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'page',
        title: 'Pages',
        S,
        context,
      }),
      S.documentTypeListItem('work').title('Work'),
    ]);
