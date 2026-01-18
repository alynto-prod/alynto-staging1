import React, { useEffect, useState } from 'react';
import { Typography, Table, Button, Tag, Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Download, ShieldCheck } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

const AgencyPricing = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [agencyName, setAgencyName] = useState('');

    useEffect(() => {
        const isAgency = localStorage.getItem('roa_is_agency');
        const storedName = localStorage.getItem('roa_agency_name');

        if (!isAgency) {
            navigate('/agency-login');
        } else {
            setAgencyName(storedName || 'Officer');
            setLoading(false);
        }
    }, [navigate]);

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Text strong className="text-white text-lg">{text}</Text>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (text) => <Tag color="#4A4A4A" className="border-none">{text}</Tag>,
        },
        {
            title: 'MSRP',
            dataIndex: 'msrp',
            key: 'msrp',
            render: (price) => <Text delete className="text-gray-500">${price}</Text>,
        },
        {
            title: 'Agency Price',
            dataIndex: 'agencyPrice',
            key: 'agencyPrice',
            render: (price) => <Text className="text-armory-red font-bold text-lg">${price}</Text>,
        },
        {
            title: 'Availability',
            dataIndex: 'stock',
            key: 'stock',
            render: (text) => <Text className="text-green-500">{text}</Text>,
        }
    ];

    const data = [
        { key: '1', name: 'Duty Carbine 14.5"', category: 'Firearms', msrp: '1499.00', agencyPrice: '1150.00', stock: 'In Stock' },
        { key: '2', name: 'Patrol Shotgun 12ga', category: 'Firearms', msrp: '899.00', agencyPrice: '675.00', stock: 'Low Stock' },
        { key: '3', name: 'Plate Carrier Lv4', category: 'Armor', msrp: '350.00', agencyPrice: '275.00', stock: 'In Stock' },
        { key: '4', name: 'Agency Suppressor 5.56', category: 'NFA', msrp: '850.00', agencyPrice: '620.00', stock: 'Backorder' },
        { key: '5', name: 'Bulk Ammo 5.56 (1000rds)', category: 'Ammunition', msrp: '550.00', agencyPrice: '420.00', stock: 'In Stock' },
    ];

    if (loading) return null;

    return (
        <div className="min-h-screen bg-armory-black pt-28 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb
                    className="mb-16"
                    items={[
                        { title: <a href="/" className="text-gray-400 hover:text-white">Home</a> },
                        { title: <span className="text-armory-red" style={{ color: '#B54A3C' }}>Agency Pricing</span> },
                    ]}
                />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck size={32} color="#B54A3C" />
                            <span style={{ color: '#B54A3C' }} className="font-bold uppercase tracking-widest text-sm">Authorized Personnel Only</span>
                        </div>
                        <Title level={1} style={{ color: '#fff', fontFamily: 'Bebas Neue', margin: 0, textTransform: 'uppercase' }}>
                            Welcome, {agencyName}
                        </Title>
                        <Title level={3} style={{ color: '#444', fontFamily: 'Bebas Neue', margin: 0, textTransform: 'uppercase' }}>
                            Agency Price List
                        </Title>
                    </div>

                    <Button
                        type="primary"
                        size="large"
                        icon={<Download size={18} />}
                        className="bg-gunmetal hover:!bg-gray-600 border-none h-12"
                    >
                        Download PDF Catalog
                    </Button>
                </div>

                <div className="bg-armory-dark border border-gunmetal p-1 rounded-sm">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        className="ant-table-dark-custom"
                        rowClassName="bg-armory-dark hover:bg-gunmetal transition-colors"
                    />
                </div>

                <div className="mt-12 p-6 border border-armory-red/30 bg-armory-red/5 rounded-sm">
                    <Title level={4} style={{ color: '#fff', margin: '0 0 12px 0' }}>Ordering Instructions</Title>
                    <Paragraph className="text-gray-400 mb-0">
                        To place an agency order, please submit a formal Purchase Order referencing the item codes above to
                        <Text className="text-armory-red mx-1">orders@rustyoakarmory.com</Text>
                        or contact your regional sales representative. Net 30 terms available for qualified departments.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default AgencyPricing;
