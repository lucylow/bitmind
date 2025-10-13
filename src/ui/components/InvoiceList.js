// src/ui/components/InvoiceList.js
// Component to display a list of invoices

import React, { useEffect, useState } from 'react';
import { getInvoiceStatus } from '../../invoice-manager.js';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      // In a real app, this would fetch a list of invoices
      // For demo, we'll simulate one invoice
      const demoInvoiceId = 'INV-12345';
      const status = await getInvoiceStatus(demoInvoiceId);
      setInvoices([status]);
    };
    fetchInvoices();
  }, []);

  return (
    <div>
      <h2>Your Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <ul>
          {invoices.map((invoice, index) => (
            <li key={index}>
              Invoice ID: {invoice.invoiceId}, Status: {invoice.status}, Bitcoin Price: ${invoice.currentPrice.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvoiceList;

