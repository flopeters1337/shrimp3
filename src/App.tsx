import "./App.css";
import {ReactNode, useState} from "react";

/** Mantine specific imports and constants */
import '@mantine/core/styles.css';
import {AppShell, Burger, Group, MantineProvider, NavLink, Stack} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {IconAdjustments, IconPlaylist, IconSpeakerphone, IconTrees} from "@tabler/icons-react";

enum Tab {
    Playback,
    Ambient,
    Soundboard,
    Settings,
}

interface TabMetadata {
    tab: Tab;
    label: string;
    icon: ReactNode;
}

/** Main app renderer */
function App() {
    /** UI features */
    const [burgerOpened, {toggle: toggleBurger}] = useDisclosure();
    const [currentTab, setCurrentTab] = useState<Tab>(Tab.Playback);
    const appTabs: TabMetadata[] = [
        {tab: Tab.Playback, label: "Audio Playback", icon: (<IconPlaylist size="1rem"/>)},
        {tab: Tab.Ambient, label: "Ambient Sounds", icon: (<IconTrees size="1rem"/>)},
        {tab: Tab.Soundboard, label: "Soundboard", icon: (<IconSpeakerphone size="1rem"/>)},
        {tab: Tab.Settings, label: "Settings", icon: (<IconAdjustments size="1rem"/>)},
    ];

    function createNavLink(tabMetadata: TabMetadata) {
        return (
            <NavLink
                href="#required-for-focus"
                label={tabMetadata.label}
                leftSection={tabMetadata.icon}
                onClick={() => setCurrentTab(tabMetadata.tab)}
                active={currentTab === tabMetadata.tab}
            ></NavLink>
        );
    }

    function renderCurrentTab(currentTab: Tab) {
        switch (currentTab) {
            case Tab.Playback:
                return (<p>Select current playlist here.</p>);
            case Tab.Ambient:
                return (<p>Select ambient sounds here.</p>)
            case Tab.Soundboard:
                return (<p>Play soundboard cues here.</p>);
            case Tab.Settings:
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
                        {appTabs.map((tab) => createNavLink(tab))}
                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main>
                    {renderCurrentTab(currentTab)}
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
