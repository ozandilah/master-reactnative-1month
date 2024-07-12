import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import { FormValues, data } from "./assets/data";

const validationSchema = Yup.object().shape({
  nama_korban: Yup.string().required("Nama Korban wajib diisi"),
  nik_korban: Yup.string().required("NIK Korban wajib diisi"),
  nama_pelaku: Yup.string().required("Nama Pelaku wajib diisi"),
  nik_pelaku: Yup.string().required("NIK Pelaku wajib diisi"),
  judul_laporan: Yup.string().required("Judul Laporan wajib diisi"),
  deskripsi_laporan: Yup.string().required("Deskripsi Laporan wajib diisi"),
  kecamatan: Yup.string().required("Kecamatan wajib dipilih"),
  desa: Yup.string().required("Desa wajib dipilih"),
  is_valid: Yup.boolean().oneOf([true], "Harus diakui valid"),
});

const App: React.FC = (): JSX.Element => {
  const handleSubmit = (values: FormValues) => {
    axios
      .post("", values)
      .then((response: AxiosResponse<any>) => {
        console.log(response.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          nama_korban: "",
          nik_korban: "",
          nama_pelaku: "",
          nik_pelaku: "",
          judul_laporan: "",
          deskripsi_laporan: "",
          kecamatan: "",
          desa: "",
          is_valid: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }: FormikProps<FormValues>) => (
          <View>
            <Text style={styles.label}>Nama Korban</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("nama_korban")}
              onBlur={handleBlur("nama_korban")}
              value={values.nama_korban}
            />
            {touched.nama_korban && errors.nama_korban && (
              <Text style={styles.error}>{errors.nama_korban}</Text>
            )}

            <Text style={styles.label}>NIK Korban</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("nik_korban")}
              onBlur={handleBlur("nik_korban")}
              value={values.nik_korban}
            />
            {touched.nik_korban && errors.nik_korban && (
              <Text style={styles.error}>{errors.nik_korban}</Text>
            )}

            <Text style={styles.label}>Nama Pelaku</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("nama_pelaku")}
              onBlur={handleBlur("nama_pelaku")}
              value={values.nama_pelaku}
            />
            {touched.nama_pelaku && errors.nama_pelaku && (
              <Text style={styles.error}>{errors.nama_pelaku}</Text>
            )}

            <Text style={styles.label}>NIK Pelaku</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("nik_pelaku")}
              onBlur={handleBlur("nik_pelaku")}
              value={values.nik_pelaku}
            />
            {touched.nik_pelaku && errors.nik_pelaku && (
              <Text style={styles.error}>{errors.nik_pelaku}</Text>
            )}

            <Text style={styles.label}>Judul Laporan</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("judul_laporan")}
              onBlur={handleBlur("judul_laporan")}
              value={values.judul_laporan}
            />
            {touched.judul_laporan && errors.judul_laporan && (
              <Text style={styles.error}>{errors.judul_laporan}</Text>
            )}

            <Text style={styles.label}>Deskripsi Laporan</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("deskripsi_laporan")}
              onBlur={handleBlur("deskripsi_laporan")}
              value={values.deskripsi_laporan}
              multiline
            />
            {touched.deskripsi_laporan && errors.deskripsi_laporan && (
              <Text style={styles.error}>{errors.deskripsi_laporan}</Text>
            )}

            <Text style={styles.label}>Kecamatan</Text>
            <Picker
              mode="dropdown"
              selectedValue={values.kecamatan}
              onValueChange={(itemValue) => {
                setFieldValue("kecamatan", itemValue);
                setFieldValue("desa", ""); // Reset desa when kecamatan changes
              }}
            >
              {Object.keys(data).map((kecamatan) => (
                <Picker.Item
                  key={kecamatan}
                  label={kecamatan}
                  value={kecamatan}
                />
              ))}
            </Picker>
            {touched.kecamatan && errors.kecamatan && (
              <Text style={styles.error}>{errors.kecamatan}</Text>
            )}

            <Text style={styles.label}>Desa</Text>
            <Picker
              selectedValue={values.desa}
              onValueChange={(itemValue) => setFieldValue("desa", itemValue)}
              enabled={!!values.kecamatan}
            >
              {values.kecamatan &&
                data[values.kecamatan].map((desa) => (
                  <Picker.Item key={desa} label={desa} value={desa} />
                ))}
            </Picker>
            {touched.desa && errors.desa && (
              <Text style={styles.error}>{errors.desa}</Text>
            )}

            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>
                I confirm the information is accurate
              </Text>
              <Picker
                selectedValue={values.is_valid}
                onValueChange={(itemValue) =>
                  setFieldValue("is_valid", Boolean(itemValue))
                }
              >
                <Picker.Item label="No" value="false" />
                <Picker.Item label="Yes" value="true" />
              </Picker>
              {touched.is_valid && errors.is_valid && (
                <Text style={styles.error}>{errors.is_valid}</Text>
              )}
            </View>

            <Button
              title="Submit"
              onPress={handleSubmit as any}
              disabled={!values.is_valid}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: "red",
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default App;
