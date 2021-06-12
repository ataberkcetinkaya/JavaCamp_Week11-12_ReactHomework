import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

export default function Navigation() {
    return (
        <div>
            <Menu inverted fixed>
                <Menu.Item
                    name='Anasayfa'
                />
                <Menu.Item
                    name='Mesajlar'
                />

                <Menu.Menu position='right'>
                    <Dropdown item text='İşlemler'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Kayıt Ol</Dropdown.Item>
                            <Dropdown.Item>Üye Girişi</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Giriş Yap</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
