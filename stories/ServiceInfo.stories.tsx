import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ServiceInfo, ServiceInfoProps } from './ServiceInfo';

export default {
  title: 'Example/ServiceInfo',
  component: ServiceInfo,
} as Meta;

const Template: Story<ServiceInfoProps> = (args) => <ServiceInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  caracteristicas: {
    id:3346,
    description: "Change Transmission (CVT)",
    make:"Chevrolet",
    model:"Aveo NG",
    estimatedate:"2021/09/07",
    km:33460,
    image:"http://3.23.108.188/cars/aveo.jpg"
  },
};
