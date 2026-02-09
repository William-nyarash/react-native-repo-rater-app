import * as yup from "yup"
import {View, TextInput, Pressable, StyleSheet, Platform}  from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';

const SignIn =() => {
      

        const style = StyleSheet.create({
                form: {
                        backgroundColor: theme.colors.secondatyBackground,
                        border:"2px transparent",
                        paddingVertical: "30px",
                        paddingHorizontal: "20px",
                        },
                input: {
                        border: "1px solid gray",
                        padding: "13px",
                        marginBottom: 10,
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        opacity: "0.3",
                        letterSpacing: "1px",
                        backgroundColor: theme.colors.secondatyBackground
                },
                button : {
                        padding: 17,
                        textAlign:"center",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        justifyContent: "center",
                        color: theme.colors.secondatyBackground,
                        display: "flex",
                        backgroundColor: " rgb(2 0 255);"
                }
        })
        const LoginSchema = yup.object().shape({
                userName: yup
                        .string() 
                        .min(3, "to short")
                        .required("username is required") ,
                password: yup
                        .string() 
                        .min(6, "Minimum 6 characters")
                        .required("Password is required")
        })
        const formik = useFormik ({
                initialValues: {
                        userName: '',
                        password: '',
                      },
                     validationSchema: LoginSchema,
                      onSubmit: values => {
                        console.log(values);
                      },
        })
        return (
        <View style={style.form}>
                               
                                 <TextInput
                                        style={ style.input}
                                        value={formik.values.userName}
                                        onChange={formik.handleChange("userName")}
                                        placeholder='username'
                                        autoCapitalize="none"
                                        />
                                {formik.touched.userName &&  formik.errors.userName && (
                                        <Text style={{color: theme.colors.warining, marginBottom: 14}}>{formik.errors.userName }</Text>
                                )}
                                
                                <TextInput
                                        style={ style.input}
                                        value={formik.values.password}
                                        type="password"
                                        secureTextEntry
                                        onChange={formik.handleChange("password")}
                                        placeholder='password'
                                        />
                                {formik.touched.password && formik.errors.password && ( 
                                        <Text style={{color: theme.colors.warining, marginBottom: 14}} >{ formik.errors.password} </Text>
                                )}
                                 <Pressable onPress={formik.handleSubmit}>
                                         <Text style={ style.button}> sign in </Text>
                                 </Pressable>
        </View>
        )
        
}

export default SignIn;