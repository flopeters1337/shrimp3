import "./App.css";

/** Mantine specific imports and constants */
import '@mantine/core/styles.css';
import {AppShell, Burger, Button, Group, NavLink, Stack, MantineProvider} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {IconAdjustments, IconPlaylist, IconSpeakerphone} from "@tabler/icons-react";

/** Main app renderer */
function App() {
    /** UI features */
    const [burgerOpened, {toggle: toggleBurger}] = useDisclosure();

    return (
        <MantineProvider defaultColorScheme={"dark"}>
            <AppShell
                padding="md"
                header={{height: 60}}
                navbar={{
                    width: 175,
                    breakpoint: 'sm',
                    collapsed: {desktop: !burgerOpened},
                }}
            >
                <AppShell.Header px="md">
                    <Group h="100%">
                        <Burger opened={burgerOpened} onClick={toggleBurger} size="md"/>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar>
                    <Stack
                        gap="0"
                    >
                        <NavLink
                            href="#required-for-focus"
                            label="Audio Playback"
                            leftSection={<IconPlaylist size="1rem"/>}
                        ></NavLink>
                        <NavLink
                            href="#required-for-focus"
                            label="Soundboard"
                            leftSection={<IconSpeakerphone size="1rem"/>}
                        ></NavLink>
                        <NavLink
                            href="#required-for-focus"
                            label="Settings"
                            leftSection={<IconAdjustments size="1rem"/>}
                        ></NavLink>
                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Button>
                        Toggle Navbar
                    </Button>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
