import React, { useState, useEffect } from 'react';
import { Modal, Button, Typography, Space } from 'antd';
import { ShieldAlert } from 'lucide-react';

const { Title, Paragraph } = Typography;

const AgeGate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ageVerified = localStorage.getItem('roa_age_verified');
        if (!ageVerified) {
            setIsModalOpen(true);
        }
    }, []);

    const handleVerify = () => {
        localStorage.setItem('roa_age_verified', 'true');
        setIsModalOpen(false);
    };

    const handleDeny = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <Modal
            title={null}
            open={isModalOpen}
            footer={null}
            closable={false}
            maskClosable={false}
            centered
            className="text-center"
            styles={{ content: { backgroundColor: '#1A1A1A', border: '2px solid #B54A3C', padding: '40px' } }}

        >
            <div className="flex flex-col items-center">
                <ShieldAlert size={64} className="text-armory-red mb-6" />

                <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Restricted Access
                </Title>

                <Paragraph style={{ color: '#d1d5db', fontSize: '18px', marginBottom: '32px' }}>
                    You must be at least 18 years of age to view this website.
                    Please verify your age to continue.
                </Paragraph>

                <Space size="large">
                    <Button
                        ghost
                        size="large"
                        onClick={handleDeny}
                        className="!text-gray-400 !border-gray-600 hover:!text-white hover:!border-white uppercase"
                    >
                        I am under 18
                    </Button>

                    <Button
                        type="primary"
                        size="large"
                        onClick={handleVerify}
                        className="!bg-armory-red !text-white uppercase font-bold"
                    >
                        I am 18 or older
                    </Button>
                </Space>
            </div>
        </Modal>
    );
};

export default AgeGate;
