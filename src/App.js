import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <table border="0" cellPadding="0" cellSpacing="0" >
        <tbody>
          <center></center>
          <tr>
              <td>Здравствуйте, Покупатель Покупателевич</td>
              <td>Ваш заказ № T-RP/00129 оформлен</td>
              <td>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для</td>
              <td className='hello'>подтверждения заказа.</td>
            </tr>
            <tr className='infoWr'>
              <td>Информация о заказе:</td>
              <td>Заказчик: Покупатель Покупателевич</td>
              <td>Email: amozik@yandex.ru</td>
              <td>Адрес: 115487, г Москва, ул Садовая Б., д 45</td>
              <td>Телефон: +7 902 266-44-63</td>
              <td>Исполнитель: Группа компаний Fulogy</td>
              <td>Менеджер: Широков Евгений</td>
              <td>Телефон: +7(499)116-34-00</td>
              <td className='info'>Монтаж: Да</td>
            </tr>
            <tr className='infoWr'>
              <td>Состав комплекта: </td>
              <td>Светильник по вашему размеру - 2 шт</td>
              <td>Блок питания 100 Вт. - 1 шт</td>
              <td>Крепления - саморезы каждые 30 см</td>
              <td>Комментарий: Можно мне гаечный ключ вместо отвертки</td>
              <td className='info'>Конфигурация светильника (вариант 2): scheme</td>
            </tr>
            <tr className='infoWr'>
              <td>Технические характеристики::</td>
              <td>Длина 1-го светильника (L1): 1375 мм</td>
              <td>Длина 2-го светильника (L2): 2110 мм</td>
              <td>Вид профиля: Накладной профиль с молочным рассеивателем</td>
              <td>Лента: Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90</td>
              <td>Суммарная потребляемая мощность: 63 Вт</td>
              <td>Вывод питающего кабеля из светильника: через заглушку</td>
              <td>Стык светильников: под углом 45 градусов</td>
              <td className='info'>Длина кабеля до блока питания (Lcb): 240 см</td>
            </tr>
            <tr >
              <td className='total'>ИТОГО: 14 000 РУБ</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
