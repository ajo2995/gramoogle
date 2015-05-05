'use strict';

module.exports = {
  Species: {
    name: 'Species',
    field: 'species',
    reactClass: require('./species.jsx')
  },
  Homologs: {
    name: 'Homologs',
    field: 'epl_gene_tree',
    reactClass: require('./gene_tree.jsx')
  },
  Domain: {
    name: 'Domain',
    field: 'domains',
    reactClass: require('./domain.jsx')
  },
  GO: {
    name: 'GO',
    field: 'GO',
    reactClass: require('./go.jsx')
  },
  PO: {
    name: 'PO',
    field: 'PO',
    reactClass: require('./po.jsx')
  },
  Biotype: {
    name: 'Biotype',
    field: 'biotype',
    reactClass: require('./biotype.jsx')
  },
  Other: {
    name: 'Other',
    reactClass: require('./other.jsx')
  }
};