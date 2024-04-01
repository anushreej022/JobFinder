import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
export default class CompanyShowcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePaths: [], // Store image paths fetched from the backend
            error: null // Store any errors that occur during fetching
        };
    }

    componentDidMount() {
        // Fetch image paths from the backend
        axios.get('http://localhost:8080/company/images')
            .then(response => {
                this.setState({ imagePaths: response.data });
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching image paths:', error);
                this.setState({ error: 'Error fetching image paths' });
            });
    }

    render() {
        const { imagePaths, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
            <h2>Company Showcase</h2>
                <Grid container spacing={2}>
                    {imagePaths.map((imagePath, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    src={imagePath.startsWith('public/') ? "../"+imagePath.substring(7) : imagePath}
                                    //src='backendImages/1711497109449.JPG'
                                    alt={imagePath.startsWith('public/') ? "../"+imagePath.substring(7) : imagePath}
                                    key={index}
                                />
                                <CardContent>
                                    <Typography variant="subtitle1">Company {index + 1}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}
