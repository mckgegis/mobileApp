import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native'

const Board = () => {
    return (
      <Grid>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
        <Col style={styles.col} size={1/5}>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
          <Row size={.2} style={styles.row}></Row>
        </Col>
      </Grid>
    );
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: 'blue',
        margin: 10
    },
    col: {
    }
})

export default Board;