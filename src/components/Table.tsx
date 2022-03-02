import React from 'react';

import {DataGrid} from '@mui/x-data-grid';

interface Beers {
    "id": number,
    "name": string,
    "tagline": string,
    "first_brewed": string,
    "description": string,
    "image_url": string,
    "abv": number,
    "ibu": number,
    "target_fg": number,
    "target_og": number,
    "ebc": number,
    "srm": number,
    "ph": number,
    "attenuation_level": number,
    "volume":{
        "value": number,
        "unit": string
    },
    "boil_volume":{
        "value": number,
        "unit": string
    },
    "method":{
        "mash_temp":[
            {
                "temp":{
                    "value": number,
                    "unit": string
                },
                "duration": number
            }
        ],
        "fermentation":{
            "temp":{
                "value": number,
                "unit": string
            }
        },
        "twist": null
    },
    "ingredients":{
        "malt":[
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                }
            },
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                }
            },
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                }
            }
        ],
        "hops":[
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                },
                "add": string,
                "attribute": string
            },
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                },
                "add": string,
                "attribute": string
            },
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                },
                "add": string,
                "attribute": string
            },
            {
                "name": string,
                "amount":{
                    "value": number,
                    "unit": string
                },
                "add": string,
                "attribute": string
            },
            {
                "name": string,
                "amount":{
                    "value":number,
                    "unit":string
                },
                "add": string,
                "attribute": string
            }
        ],
        "yeast": string
    },
    "food_pairing":string[],
    "brewers_tips": string,
    "contributed_by": string
}

interface Props {
    beers: Beers;
}

const Table = ({beers}: Props) => {

    const arr = beers.map((item) => {
        const rows =
            {
                id: item.id,
                name: item.name,
                tagline: item.tagline,
                firstBrewed: item.first_brewed,
                description: item.description,
                image_url: item.image_url,
                volume: item.volume.value
            }
        return rows
    })

    const columns = [
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'tagline', headerName: 'Tagline', width: 200},
        {field: 'firstBrewed', headerName: 'First brewed', width: 100},
        {field: 'description', headerName: "Description", width: 200},
        {field: 'image_url', headerName: "Image", width: 200},
        {field: 'volume', headerName: 'Volume', width: 130}
    ];


    return (
        <div className="redux-table" style={{height: '100vh', width: '100%'}}>
            <DataGrid
                rows={arr}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default Table;