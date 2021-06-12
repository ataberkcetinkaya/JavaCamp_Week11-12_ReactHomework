import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

export default function GuestDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>Ad</label>
                                <input placeholder='Ad girin...' />
                            </Form.Field>
                            <Form.Field>
                                <label>Soyad</label>
                                <input placeholder='Soyad girin...' />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Hükümleri ve koşulları kabul ediyorum.' />
                            </Form.Field>
                            <Button type='submit'>Onayla</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
