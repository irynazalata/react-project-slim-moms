import React from 'react';
import DiaryDateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar.jsx';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm.js';
import DiaryAddProductList from '../../components/DiaryProductsList/DiaryProductList.js';
import RightSideBar from '../../components/RightSideBar/RightSideBar.js';
import Header from '../../components/Header/Header';
import img from "../../images/plus.png";
import Modal from '../../components/DiaryAddProductForm/AddProductModal.jsx';

import styles from './diary.module.css';
import { Component } from 'react';

class DiaryPage extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render () {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerInformation}>
          <DiaryDateCalendar />
          <div className={styles.hidden}>
            <DiaryAddProductForm />
          </div>
          <DiaryAddProductList />
          <button className={styles.roundBtn} onClick={this.modalToggle} type='button'>
            <img className={styles.img} src={img} alt='add'/>
          </button>
          {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
        </div>
        <RightSideBar />
      </div>
    </>
    );
    }
};
export default DiaryPage;
