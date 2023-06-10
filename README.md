Form Validation
This is a React component that renders a form with input fields for the user to fill in. The form includes validation rules for each input field using the yup library.

Installation
To install the necessary dependencies for this component, run the following command:

npm install react-hook-form @hookform/resolvers yup

This will install the react-hook-form, @hookform/resolvers, and yup libraries.

Usage
To use the form component in your React app, import the Form component from the Form.jsx file:

import Form from './Form.jsx';

Then, include the Form component in your JSX:

<Form />

The Form component will render a form with input fields for the user to fill in. Each input field is registered with the useForm hook from the react-hook-form library and has an associated error message that is displayed if the input is invalid. The yup library is used to define the validation rules for each input field.

When the user submits the form, the onSubmit function is called with the form data, which is logged to the console.

Validation Rules
The following validation rules are applied to each input field:

fullName: Required
email: Required, must be a valid email address
mobileNumber: Must be an integer
age: Required, must be a positive integer greater than or equal to 18
password: Required, must be between 4 and 32 characters long
confirmPassword: Required, must match the password field
License
This component is licensed under the MIT license. See the LICENSE file for more information.

Credits
This component was created by Mehedi Hasan (Me).

Code Explanation
The Form.jsx file contains the code for the form component.

The yup library is used to define the validation rules for each input field. The schema object defines the validation rules for each input field. For example, the fullName field is required, the email field must be a valid email address, the mobileNumber field must be an integer, the age field must be a positive integer greater than or equal to 18, the password field must be between 4 and 32 characters long, and the confirmPassword field must match the password field.

The useForm hook is used to register each input field with the form and handle form submission. The resolver option is set to yupResolver(schema) to handle validation using the yup library.

The onSubmit function is called when the form is submitted and logs the form data to the console.

Each input field is rendered with an associated error message that is displayed if the input is invalid. The errors object is passed to each error message to display the appropriate error message for each input field.