import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Card } from 'antd';
import { ShieldCheck, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const AgencyLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Marion County ORI Data Mapping
    const LEA_MAPPING = {
        'TN0310400': 'Monteagle Police Department',
        'TN0580000': 'Marion County Sheriff\'s Office',
        'TN0580100': 'South Pittsburg Police Department',
        'TN0580200': 'Whitwell Police Department',
        'TN0580300': 'Jasper Police Department',
        'TN0580500': 'Kimball Police Department',
        'TN0580700': 'Drug Task Force: 12th Judicial District'
    };

    const onFinish = (values) => {
        setLoading(true);
        const { oriNumber } = values;

        // ORI Validation: 7 or 9 digit number OR Valid Marion County Code
        const oriRegex = /^(\d{7}|\d{9})$/;
        const mappedAgencyName = LEA_MAPPING[oriNumber];

        setTimeout(() => {
            // Check for explicit mapping first, then general regex fallback
            if (mappedAgencyName) {
                localStorage.setItem('roa_is_agency', 'true');
                localStorage.setItem('roa_agency_name', mappedAgencyName);
                message.success('Agency verification successful.');
                navigate('/agency-pricing');
            } else if (oriRegex.test(oriNumber)) {
                localStorage.setItem('roa_is_agency', 'true');
                localStorage.setItem('roa_agency_name', ''); // No specific name for generic login
                message.success('Agency verification successful.');
                navigate('/agency-pricing');
            } else {
                message.error('Invalid ORI Number. Please enter a valid identifier.');
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-armory-black flex items-center justify-center px-4 py-20">
            <Card
                className="w-full max-w-md bg-armory-dark border-2 border-gunmetal"
                bodyStyle={{ padding: '40px' }}
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-armory-black rounded-full mb-4 border border-gunmetal">
                        <ShieldCheck size={40} className="text-armory-red" />
                    </div>
                    <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', margin: 0 }}>
                        Agency Portal
                    </Title>
                    <Text className="text-gray-400 font-source">
                        Restricted access for Law Enforcement Agencies only.
                    </Text>
                </div>

                <Form
                    name="agency_login"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="oriNumber"
                        rules={[{ required: true, message: 'Please enter your ORI Number' }]}
                    >
                        <Input
                            prefix={<Lock className="text-gray-500" size={18} />}
                            placeholder="Enter ORI Number"
                            size="large"
                            className="bg-armory-black border-gunmetal text-white placeholder-gray-600 hover:border-armory-red focus:border-armory-red"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block
                            loading={loading}
                            className="bg-armory-red hover:!bg-red-700 border-none font-bold uppercase h-12"
                        >
                            Verify Credentials
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center mt-6">
                    <Text className="text-gray-500 text-sm">
                        Please contact support if you require assistance with your agency credentials.
                    </Text>
                </div>
            </Card>
        </div>
    );
};

export default AgencyLogin;
