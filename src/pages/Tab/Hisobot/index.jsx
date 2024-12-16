import React from 'react' 
import TaskInfo from '../../../components/TaskInfo/taskInfo'
import "./styled.css"

function Report() {
  return (
    <div className='Report_box'>
      <TaskInfo text='Barcha topshiriqlar' number='1' numberColor="#4F46E5"/>
      <TaskInfo text='Bajarilmoqda' number='2' numberColor="#3B82F6"/>
      <TaskInfo text='Bajarilgan' number='3' numberColor="#22C55E"/>
      <TaskInfo text='Bajarilmagan' number='1' numberColor="#EF4444"/>
      <TaskInfo text='Muddatidan kech bajarilgan' number='1' numberColor="#4F46E5"/>
      <TaskInfo text='Qayta nazoratga olingan' number='1' numberColor="#EF4444"/>
      <TaskInfo text='Berilgan javoblar' number='1' numberColor="#EAB308"/>
      <TaskInfo text='Qabul qilinmaganlar' number='1' numberColor="#EF4444"/>
    </div>
  )
}

export default Report