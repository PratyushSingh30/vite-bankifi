export const config = {
  "PRODUCT_NAME": import.meta.env.VITE_PRODUCT_NAME || "Open Cash Management",
  "VERSION": import.meta.env.VITE_VERSION || "2.1.0",
  "APP_ENV": import.meta.env.VITE_APP_ENV || "development",
  "API": {
    "ROOT_URL": import.meta.env.VITE_API_ROOT_URL || "https://api.opal.sbox.bankifi.com",
    "VERSION": import.meta.env.VITE_API_VERSION || "v1"
  },
  "URLS": {
    "PAYMENT_PROVIDER": {
      "TERMS_AND_CONDITIONS_URL": import.meta.env.VITE_URLS_PAYMENT_PROVIDER_TERMS_AND_CONDITIONS_URL || "https://content.moneyhub.co.uk/terms/api-terms-v1.pdf",
      "PRIVACY_POLICY": import.meta.env.VITE_URLS_PAYMENT_PROVIDER_PRIVACY_POLICY || "https://invite.moneyhub.co.uk/privacy-policy-and-cookies",
      "APPLY_FOR_SQUARE": import.meta.env.VITE_URLS_PAYMENT_PROVIDER_APPLY_FOR_SQUARE || "https://squareup.com/gb/en/payments"
    },
    "TERMS_AND_CONDITIONS_URL": import.meta.env.VITE_URLS_TERMS_AND_CONDITIONS_URL || "#",
    "PRIVACY_POLICY_URL": import.meta.env.VITE_URLS_PRIVACY_POLICY_URL || "#"
  },
  "AIS_PROVIDER": import.meta.env.VITE_AIS_PROVIDER || "Moneyhub",
  "ENDTEST": {
    "ENDTEST_IP": import.meta.env.VITE_ENDTEST_ENDTEST_IP || "3.9.107.187",
    "IP_URL": import.meta.env.VITE_ENDTEST_IP_URL || "https://api.ipify.org?format=json"
  },
  "INPUTS": {
    "SUPPORTED_CURRENCIES": JSON.parse(import.meta.env.VITE_INPUTS_SUPPORTED_CURRENCIES || '["GBP"]'),
    "MAXIMUM_TRANSACTION_AMOUNT": parseInt(import.meta.env.VITE_INPUTS_MAXIMUM_TRANSACTION_AMOUNT || "250000"),
    "DEFAULT_PHONE_COUNTRY_CODE": import.meta.env.VITE_INPUTS_DEFAULT_PHONE_COUNTRY_CODE || "GB",
    "BANK_SORT_CODE_MASK": import.meta.env.VITE_INPUTS_BANK_SORT_CODE_MASK || "99-99-99"
  },
  "FEATURES": {
    "GENERAL_FEATURES": JSON.parse(import.meta.env.VITE_FEATURES_GENERAL_FEATURES || '["DASHBOARD","CASHFLOW_FORECAST","CUSTOMER_INVOICES","PAYMENT_REQUEST","SUPPLIER_INVOICES","MAKE_PAYMENT","SETTINGS","NATIVE_INVOICING","TRANSACTION_CATEGORISATION","MULTI_CHANNEL","TAX_TRACKER"]'),
    "SETTINGS_TABS": JSON.parse(import.meta.env.VITE_FEATURES_SETTINGS_TABS || '["USER","ORGANISATION","BANK_ACCOUNTS","ACCOUNTING_PACKAGE","TERMS_OF_USE_AND_PRIVACY_POLICY"]'),
    "DELIVERY_METHODS": {
      "IS_EMAIL_ONLY": import.meta.env.VITE_FEATURES_DELIVERY_METHODS_IS_EMAIL_ONLY === "true",
      "LIST": JSON.parse(import.meta.env.VITE_FEATURES_DELIVERY_METHODS_LIST || '["Email"]')
    },
    "TRANSACTION": {
      "TRANSACTION_CATEGORISATION": import.meta.env.VITE_FEATURES_TRANSACTION_TRANSACTION_CATEGORISATION === "true"
    },
    "TAX_TRACKER": {
      "INCOME_TAX": import.meta.env.VITE_FEATURES_TAX_TRACKER_INCOME_TAX === "true",
      "VAT": import.meta.env.VITE_FEATURES_TAX_TRACKER_VAT === "true",
      "ENABLED": import.meta.env.VITE_FEATURES_TAX_TRACKER_ENABLED === "true",
      "VAT_THRESHOLD": import.meta.env.VITE_FEATURES_TAX_TRACKER_VAT_THRESHOLD === "true",
      "ENABLED_NEW_VERSION": import.meta.env.VITE_FEATURES_TAX_TRACKER_ENABLED_NEW_VERSION === "true"
    },
    "SUBSCRIPTIONS": {
      "TYPE": import.meta.env.VITE_FEATURES_SUBSCRIPTIONS_TYPE || "none"
    },
    "REGISTRATION": {
      "MOBILE_FLOW_ENABLED": import.meta.env.VITE_FEATURES_REGISTRATION_MOBILE_FLOW_ENABLED === "true"
    },
    "SETUP": {
      "CLEARING_LEDGER": import.meta.env.VITE_FEATURES_SETUP_CLEARING_LEDGER === "true",
      "LINKING_ACCOUNTING_PACKAGE": import.meta.env.VITE_FEATURES_SETUP_LINKING_ACCOUNTING_PACKAGE === "true"
    },
    "RTP": {
      "RECURRING_PAYMENTS": import.meta.env.VITE_FEATURES_RTP_RECURRING_PAYMENTS === "true",
      "CARD_PAYMENTS": import.meta.env.VITE_FEATURES_RTP_CARD_PAYMENTS === "true"
    },
    "NAVIGATION": {
      "BOTTOM_NAVIGATION": import.meta.env.VITE_FEATURES_NAVIGATION_BOTTOM_NAVIGATION === "true",
      "LEFT_SIDEBAR": import.meta.env.VITE_FEATURES_NAVIGATION_LEFT_SIDEBAR === "true",
      "RIGHT_SIDEBAR": import.meta.env.VITE_FEATURES_NAVIGATION_RIGHT_SIDEBAR === "true"
    },
    "AUDITING": {
      "LOGGER_ENABLED": import.meta.env.VITE_FEATURES_AUDITING_LOGGER_ENABLED === "true"
    }
  },
  "DATE_LOCALE": import.meta.env.VITE_DATE_LOCALE || "enGB",
  "LANGUAGE": import.meta.env.VITE_LANGUAGE || "enGB",
  "NAVIGATION": {
    "MAIN_PAGE": import.meta.env.VITE_NAVIGATION_MAIN_PAGE || "/app/dashboard"
  },
  "SUPPORT_EMAIL": import.meta.env.VITE_SUPPORT_EMAIL || "placeholder@email.com",
  "SERVICES": {
    "GOOGLE": {
      "RECAPTCHA_SITE_KEY": import.meta.env.VITE_SERVICES_GOOGLE_RECAPTCHA_SITE_KEY || "6LeWUI8oAAAAANAfL4rUFUjHJqvb9MLaxe_XA_bl"
    }
  }
} as const;