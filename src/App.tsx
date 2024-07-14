import "./App.css";
import {ReactNode, useState} from "react";

/** Mantine specific imports and constants */
import '@mantine/core/styles.css';
import {AppShell, Burger, Group, MantineProvider, NavLink, Stack} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {IconAdjustments, IconPlaylist, IconSpeakerphone} from "@tabler/icons-react";

/** Main app renderer */
function App() {
    /** UI features */
    const [burgerOpened, {toggle: toggleBurger}] = useDisclosure();
    const [currentTab, setCurrentTab] = useState('playback');
    const appTabs = [
        {
            tabName: "playback",
            label: "Audio Playback",
            icon: (<IconPlaylist size="1rem"/>)
        },
        {
            tabName: "soundboard",
            label: "Soundboard",
            icon: (<IconSpeakerphone size="1rem"/>)
        },
        {
            tabName: "settings",
            label: "Settings",
            icon: (<IconAdjustments size="1rem"/>)
        },
    ];

    function createNavLink(tabName: string, label: string, icon: ReactNode)
    {
        return (
            <NavLink
                href="#required-for-focus"
                label={label}
                leftSection={icon}
                onClick={() => setCurrentTab(tabName)}
                active={currentTab === tabName}
            ></NavLink>
        );
    }

    function renderCurrentTab(currentTab: string) {
        switch (currentTab) {
            case "playback":
                return (<p>Select current playlist here.</p>);
            case "soundboard":
                return (<p>Play soundboard cues here.</p>);
            case "settings":
                return (<p>Change settings here.</p>);
            default:
                return (<p>Unknown app tab.</p>);
        }
    }

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
                    <Stack gap="0">
                        {appTabs.map((tab) => createNavLink(tab.tabName, tab.label, tab.icon))}
                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main>
                    { renderCurrentTab(currentTab) }
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
