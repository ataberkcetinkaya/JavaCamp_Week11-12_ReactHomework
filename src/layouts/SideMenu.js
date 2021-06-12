import React from 'react'
import { Button, Input, Dropdown, Container, Label, Menu } from 'semantic-ui-react'

export default function SideMenu() {
    return (
        <div>
            <Menu size='large' vertical>
                <Menu.Item
                    name='inbox'
                >
                    <Label color='teal'>1</Label>
                    Gelen Kutusu
                </Menu.Item>

                <Menu.Item
                    name='spam'
                >
                    <Label>51</Label>
                    Spam Kutusu
                </Menu.Item>

                <Menu.Item
                    name='updates'
                >
                    <Label>1</Label>
                    Güncellemeler
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Ara...' />
                </Menu.Item>
            </Menu>
        </div>
    )
}
