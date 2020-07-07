import { TextInput, View } from "react-native";
import { compose } from "recompose";
import makeInput, {
  KeyboardModal,
  withPickerValues
} from "react-native-formik";
 
const MyPicker = compose(
  makeInput,
  withPickerValues
)(TextInput);
 
export default propsp => (
  <Formik
    onSubmit={values => {
      KeyboardModal.dismiss();
      console.log(values);
    }}
    validationSchema={validationSchema}
    render={props => {
      return (
        <View>
          <MyPicker
            name="gender"
            values={[
              { label: "male", value: "Mr" },
              { label: "female", value: "Mrs" }
            ]}
          />
        </View>
      );
    }}
  />
);