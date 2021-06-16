import React from 'react'
import { Formik, Form, Field, useField, FieldAttributes, FieldArray } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export const Signup = () => {
    const validate = Yup.object({
        firma: Yup.string()
            .max(15, 'En fazla 15 karakter')
            .required('Gerekli'),
        departman: Yup.string()
            .max(20, 'En fazla 20 karakter')
            .required('Gerekli'),
        tanim: Yup.string()
            .min(40, 'Tanımı çoğaltın')
            .required('Gerekli'),
        calismazamani: Yup.string()
            .max(15, 'En fazla 15 karakter')
            .required('Çalışma zamanı seçiniz'),
        iletisim: Yup.string()
            .max(30, 'En fazla 30 karakter')
            .required('İletişim bilgisi gerekli')
        })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">İş İlanı Paylaşımı</h1>
                    <Form>
                        <TextField label="Şirket / Firma" name="firma" type="text" />
                        <TextField label="İş Departmanı / Pozisyonu" name="departman" type="text" />
                        <TextField label="İş Tanımı" name="tanim" type="text" />
                        <TextField label="Çalışma Zamanı" name="calismazamani" type="text" />
                        <TextField label="İletişim - Telefon veya Mail" name="iletisim" type="text" />
                        <button className="btn btn-dark mt-3" type="submit">Onayla, Paylaş</button>
                        <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
