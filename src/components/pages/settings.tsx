import {Container, Group, InputWrapper, Slider, Text} from '@mantine/core';

export function renderSettingsTab()
{
    return (
        <Container fluid>
            <Group grow preventGrowOverflow={false}>
                <InputWrapper label="Master Volume">
                    <Slider
                        marks={[
                            { value: 0, label: "0%"},
                            { value: 50, label: "50%"},
                            { value: 100, label: "100%"},
                        ]}
                    />
                </InputWrapper>
            </Group>
        </Container>
    );
}