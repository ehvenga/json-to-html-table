import { JsonToTable } from '../components/JsonToTable';

export default {
  title: 'Example/JsonToTable',
  component: JsonToTable,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Data to be displayed in the table',
      control: {
        type: 'object',
      },
    },
  },
};

export const ReactJsonToTable = {
  args: {
    data: [
      {
        'glossary': {
          'title': 'example glossary',
          'GlossDiv': {
            'title': 'S',
            'GlossList': {
              'GlossEntry': {
                'ID': 'SGML',
                'SortAs': 'SGML',
                'GlossTerm': 'Standard Generalized Markup Language',
                'Acronym': 'SGML',
                'Abbrev': 'ISO 8879:1986',
                'GlossDef': {
                  'para':
                    'A meta-markup language, used to create markup languages such as DocBook.',
                  'GlossSeeAlso': ['GML', 'XML'],
                },
                'GlossSee': 'markup',
              },
            },
          },
        },
      },
    ],
  },
};
