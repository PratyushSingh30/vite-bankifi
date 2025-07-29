const config = {
  "PRODUCT_NAME": "Open Cash Management",
  "VERSION": "2.1.0",
  "APP_ENV": "test",
  "API": {
    "ROOT_URL": "https://api.opal.sbox.bankifi.com",
    "VERSION": "v1"
  },
  "URLS": {
    "PAYMENT_PROVIDER": {
      "TERMS_AND_CONDITIONS_URL": "https://content.moneyhub.co.uk/terms/api-terms-v1.pdf",
      "PRIVACY_POLICY": "https://invite.moneyhub.co.uk/privacy-policy-and-cookies",
      "APPLY_FOR_SQUARE": "https://squareup.com/gb/en/payments"
    },
    "TERMS_AND_CONDITIONS_URL": "#",
    "PRIVACY_POLICY_URL": "#"
  },
  "AIS_PROVIDER": "Moneyhub",
  "ENDTEST": {
    "ENDTEST_IP": "3.9.107.187",
    "IP_URL": "https://api.ipify.org?format=json"
  },
  "INPUTS": {
    "SUPPORTED_CURRENCIES": ["GBP"],
    "MAXIMUM_TRANSACTION_AMOUNT": 250000,
    "DEFAULT_PHONE_COUNTRY_CODE": "GB",
    "BANK_SORT_CODE_MASK": "99-99-99"
  },
  "FEATURES": {
    "GENERAL_FEATURES": [
      "DASHBOARD",
      "CASHFLOW_FORECAST",
      "CUSTOMER_INVOICES",
      "PAYMENT_REQUEST",
      "SUPPLIER_INVOICES",
      "MAKE_PAYMENT",
      "SETTINGS",
      "NATIVE_INVOICING",
      "TRANSACTION_CATEGORISATION",
      "MULTI_CHANNEL",
      "TAX_TRACKER"
    ],
    "SETTINGS_TABS": [
      "USER",
      "ORGANISATION",
      "BANK_ACCOUNTS",
      "ACCOUNTING_PACKAGE",
      "TERMS_OF_USE_AND_PRIVACY_POLICY"
    ],
    "DELIVERY_METHODS": {
      "IS_EMAIL_ONLY": false,
      "LIST": ["Email"]
    },
    "TRANSACTION": {
      "TRANSACTION_CATEGORISATION": true
    },
    "TAX_TRACKER": {
      "INCOME_TAX": true,
      "VAT": true,
      "ENABLED": true,
      "VAT_THRESHOLD": true,
      "ENABLED_NEW_VERSION": true
    },
    "SUBSCRIPTIONS": {
      "TYPE": "none"
    },
    "REGISTRATION": {
      "MOBILE_FLOW_ENABLED": false
    },
    "SETUP": {
      "CLEARING_LEDGER": false,
      "LINKING_ACCOUNTING_PACKAGE": true
    },
    "RTP": {
      "RECURRING_PAYMENTS": true,
      "CARD_PAYMENTS": false
    },
    "NAVIGATION": {
      "BOTTOM_NAVIGATION": false,
      "LEFT_SIDEBAR": true,
      "RIGHT_SIDEBAR": false
    },
    "AUDITING": {
      "LOGGER_ENABLED": false
    }
  },
  "DATE_LOCALE": "enGB",
  "LANGUAGE": "enGB",
  "NAVIGATION": {
    "MAIN_PAGE": "/app/dashboard"
  },
  "SUPPORT_EMAIL": "placeholder@email.com",
  "SERVICES": {
    "GOOGLE": {
      "RECAPTCHA_SITE_KEY": "6LeWUI8oAAAAANAfL4rUFUjHJqvb9MLaxe_XA_bl"
    }
  }
};

console.log('🏦 Bankifi Configuration');
console.log('========================');
console.log(`Environment: ${config.APP_ENV}`);
console.log(`API Root: ${config.API.ROOT_URL}`);
console.log(`Product: ${config.PRODUCT_NAME} v${config.VERSION}`);
console.log('');
console.log('Full Configuration:');
console.log(JSON.stringify(config, null, 2));