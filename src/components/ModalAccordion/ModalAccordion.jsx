import React from 'react'
import { Accordion } from "react-bootstrap";



export const ModalAccordion = () => {
  return (
    <div style={{width:"563px"}}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mahsulot haqida</Accordion.Header>
          <Accordion.Body>
            Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
