import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tablist.css'

const Tablist = () => {
    return (
        // <Tabs>
        //   <TabList>
        //     <Tab>Tab 1</Tab>
        //     <Tab>Tab 2</Tab>
        //     <Tab>Tab 3</Tab>
        //   </TabList>
    
        //   <TabPanel>
        //     <h2>Content for Tab 1</h2>
        //   </TabPanel>
        //   <TabPanel>
        //     <h2>Content for Tab 2</h2>
        //   </TabPanel>
        //   <TabPanel>
        //     <h2>Content for Tab 3</h2>
        //   </TabPanel>
        // </Tabs>
        <>
        <div className='tablist-heading'>
            <h1>Destination Name</h1>
        </div>
        <div className='tablist-tabs'>
        <Tabs>
            <TabList>
            <Tab>History</Tab>
            <Tab>Places To Travel</Tab>
            <Tab>Best Hotels</Tab>
            <Tab>Food Diversity</Tab>
            </TabList>

            <TabPanel>
            <h2>Welcome to the Home tab!</h2>
            </TabPanel>
            <TabPanel>
            <h2>Learn more about us in the About tab.</h2>
            </TabPanel>
            <TabPanel>
            <h2>Get in touch via the Contact tab.</h2>
            </TabPanel>
        </Tabs>
        </div>
        </>
      );
}

export default Tablist