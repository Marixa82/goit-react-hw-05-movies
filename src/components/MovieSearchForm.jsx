import { toast } from 'react-toastify';
import { SearchbarHead, SearchForm,SearchFormBtn, SearchFormBtnLabel,SearchFormInput } from './Searchbar.styled';
import { useState } from "react";
import { ImSearch } from 'react-icons/im';
import PropTypes from "prop-types";



export default function Searchbar ({onSubmit}) { 
    const [searchQuery, setSearchQuery] = useState('')
    
    const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
    
  };
    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
      toast.info("Please! Enter your search query! Ok");
            return;
        }
        onSubmit(searchQuery)
        setSearchQuery('')
    }

    
        return (
        <SearchbarHead>
                <SearchForm onSubmit={handleSubmit} >
                    <SearchFormBtn type="submit" ><ImSearch style= {{marginRight: 2,marginTop:4,width:25,height:25}}/>
                   <SearchFormBtnLabel>Search</SearchFormBtnLabel>
            </SearchFormBtn>
                    <SearchFormInput
                    type="text"
                            name="searchQuery"
                            value={searchQuery}
                    onChange={handleNameChange}
                        autoComplete="off"
                        autoFocus
              placeholder="Search images and photos"
            />
                </SearchForm>
            </SearchbarHead>
          )
    }
    
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
// import { Formik, Form, Field } from 'formik';

// export const MaterialEditorForm = ({
//   initialValues = { title: '', link: '' },
//   onSubmit,
//   btnText,
// }) => {
//   const handleSubmit = async (values, actions) => {
//     await onSubmit(values);
//     actions.setSubmitting(false);
//     actions.resetForm();
//   };
//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       {({ isSubmitting }) => (
//         <Form>
//           <label>
//             Описание
//             <Field name="title" type="text" />
//           </label>
//           <br />
//           <label>
//             Ссылка
//             <Field name="link" type="text" />
//           </label>
//           <br />
//           <button type="submit" disabled={isSubmitting}>
//             {btnText}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };