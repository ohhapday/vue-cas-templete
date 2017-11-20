/**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/16
 * Time: 오후 4:35
 * 폼처리 참고 자료 - 함수형 언어 프로그램 기법
 */

import Vue from 'vue';
import axios from 'axios';
import sha256 from 'sha256';

const app = new Vue();

class Form {
  constructor(data) {
    this.originalData = data;
    for (let field in data) {
      this[field] = data[field];
    }
    this.hasError = false;
  }

  data() {
    let data = {};
    for (let field in this.originalData) {
      if (field.match(/^password/) && data[field] !== '') {
        data[field] = sha256(`moneybook:${this[field]}`);
      } else {
        data[field] = this[field];
      }
    }
    return data;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }
  }

  submit(url) {
    let data = {user: this.data()};
    axios.post(url, data)
      .then(response => {
        if (response.data['auth_token']) {
          localStorage.setItem('auth_token', response.data['auth_token']);
          location.href = './content.html';
        } else {
          this.hasError = false;
          app.renderNotification('Successfully Signed up');
          app.toggleSignUp();
        }
      })
      .catch(error => {
        this.hasError = true;
        app.renderNotification(error.response.data);
      });
  }
}

export default Form;
