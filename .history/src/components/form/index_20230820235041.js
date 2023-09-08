import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ResultMedia from "../result";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messagemedia, setMessagemedia] = useState("preencha os dados")
    const [media, setmedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")


    return (
        //conteudo do formulario
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput placeholder="Ex: 70" keyboardType="numeric"></TextInput>
                <Text>Nota 2</Text>
                <TextInput placeholder="Ex: 10" keyboardType="numeric"></TextInput>
                <Button title="Calcular Média" />
                <ResultMedia messageResultmedia={messagemedia} resultmedia={media}></ResultMedia>
            </View>
        </View>
    );
}