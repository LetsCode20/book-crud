import * as Yup from 'yup';

export const YupBookSchema = Yup.object({
  isbn: Yup.string()
    .min(10, 'Isbn must be more than 10 characters')
    .max(13, 'Isbn must be shorter than 13 characters')
    .required('Required'),
  title: Yup.string()
    .min(3, 'Title must be more than 3 characters')
    .required('Required'),
  author: Yup.string()
    .min(6, 'Author must be more than 6 characters')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Description must be more than 10 characters')
    .required('Required'),
  published_year: Yup.number()
    .positive()
    .integer()
    .min(1900)
    .required('Required'),
  publisher: Yup.string().required('Required'),
}).required();
