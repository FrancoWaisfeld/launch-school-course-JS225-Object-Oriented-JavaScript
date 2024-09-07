let invoices = {
  unpaid: [],
  paid: [],
  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue() {
    let total = 0;
    this.unpaid.forEach((invoice => total += invoice.amount));
    return total;
  },

  totalPaid() {
    let total = 0;
    this.paid.forEach((invoice => total += invoice.amount));
    return total;
  },

  payInvoice(name) {
    let unpaidInvoices = []
    this.unpaid.forEach(invoice =>  {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        unpaidInvoices.push(invoice);
      }
    });

    this.unpaid = unpaidInvoices;
  },
};

invoices.add('Due North Development', 250);

invoices.add('Moonbeam interactive', 187.5);

invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
