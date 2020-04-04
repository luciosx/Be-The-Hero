import React, {useState} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { useEffect } from 'react';



export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [Total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if(loading) {
            return;
        }

        if(Total > 0 && incidents.length === Total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);//anexando dois vetores
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {Total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.IncidentsList}
                keyExtractor={incident => String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loading.incidents}
                onEndReachedThreshold={0.2}
                renderItem={( { item: incident } ) => (
                    <View style={styles.Incidents}>
                        <Text style={styles.IncidentsProperty}>ONG:</Text>
                        <Text style={styles.IncidentsValue}>{ incident.name }</Text>
                        
                        <Text style={styles.IncidentsProperty}>CASO:</Text>
                        <Text style={styles.IncidentsValue}>{ incident.title }</Text>

                        <Text style={styles.IncidentsProperty}>Valor:</Text>
                        <Text style={styles.IncidentsValue}>
                            { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={ () => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                </View> 
                )}
            /> 
        </View>
    );
}