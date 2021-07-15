import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { BsFillCloudFill } from 'react-icons/bs';

import { HeaderStyleWrapper } from './style';
import Content from '../../components/style/content.component';
import { adapterData } from '../../assets/demoData';
import { moduleData } from '../../assets/demoData';

const modalIconStyle = {
  border: "1px dashed",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  padding: "0",
  alignItems: "center",
  margin: "0 auto",
}

const HeaderScreen = () => {
  let history = useHistory ();
 
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [schemaModal, setSchemaModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleSchemaModal = () => {
    setSchemaModal(!schemaModal);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    toggleSchemaModal();
    toggleModal();
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <HeaderStyleWrapper>
      <Modal isOpen={modal} toggle={toggleModal} className="createModal">
        <ModalHeader toggle={toggleModal}>Adapter Modal</ModalHeader>
        <ModalBody>
          <Row>
            {adapterData.map((module, index) => {
              return (
                <Col lg={3} className="text-center">
                  <div onClick={toggleNested} style={{ cursor: 'pointer', padding: '10px' }} className="item">
                    <Row style={modalIconStyle}>
                      <BsFillCloudFill size="24" style={{ padding: '0' }} />
                    </Row>
                    <p style={{ marginTop: '10px' }}>
                      {module}
                    </p>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Connection Detail</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row style={{ marginBottom: '20px' }}>
                  <Label for="exampleEmail" sm={2}>Url</Label>
                  <Col sm={10}>
                    <Input type="url" name="url" id="url" placeholder="Url" />
                  </Col>
                </FormGroup>
                <FormGroup row style={{ marginBottom: '20px' }}>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="eamil" placeholder="email" />
                  </Col>
                </FormGroup>
                <FormGroup row style={{ marginBottom: '20px' }}>
                  <Label for="exampleEmail" sm={2}>password</Label>
                  <Col sm={10}>
                    <Input type="password" name="password" id="password" placeholder="password" />
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleNested}>Cancel</Button>{' '}
              <Button color="primary" onClick={toggleAll}>Connect</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={schemaModal} toggle={toggleSchemaModal} className="schemaModal">
        <ModalHeader toggle={toggleSchemaModal}>Schema Modal</ModalHeader>
        <ModalBody>
          <Row>
            {moduleData.map((module, index) => {
              return (
                <Col lg={3} className="text-center">
                  <div onClick={toggleSchemaModal} style={{ cursor: 'pointer', padding: '10px' }} className="item">
                    <Row style={modalIconStyle}>
                      <BsFillCloudFill size="24" style={{ padding: '0' }} />
                    </Row>
                    <p style={{ marginTop: '10px' }}>
                      {module}
                    </p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleSchemaModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
      <Content className="header">
        <h5><Link to="/">Chainwide</Link></h5>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Create
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Create</DropdownItem>
            <DropdownItem onClick={toggleModal}>Smart Contract</DropdownItem>
            <DropdownItem onClick={toggleModal}>ERP Integration</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Content>
    </HeaderStyleWrapper>
  );
}

export default HeaderScreen;
