// Dependencies
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Hooks
import { useApp } from 'site/hooks/use-app.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'site/components/wrappers/page.mjs'
import { ns as authNs } from 'site/components/wrappers/auth/index.mjs'
import { ns as apikeysNs } from 'site/components/account/apikeys.mjs'

// Translation namespaces used on this page
const namespaces = [...new Set([...apikeysNs, ...authNs, ...pageNs])]

/*
 * Some things should never generated as SSR
 * So for these, we run a dynamic import and disable SSR rendering
 */
const DynamicAuthWrapper = dynamic(
  () => import('site/components/wrappers/auth/index.mjs').then((mod) => mod.AuthWrapper),
  { ssr: false }
)

const DynamicApikeys = dynamic(
  () => import('site/components/account/apikeys.mjs').then((mod) => mod.Apikeys),
  { ssr: false }
)

const AccountPage = (props) => {
  const app = useApp(props)
  const { t } = useTranslation(namespaces)
  const crumbs = [
    [t('yourAccount'), '/account'],
    [t('apikeys'), '/account/apikeys'],
  ]

  return (
    <PageWrapper app={app} title={t('apikeys')} crumbs={crumbs}>
      <DynamicAuthWrapper app={app}>
        <DynamicApikeys app={app} />
      </DynamicAuthWrapper>
    </PageWrapper>
  )
}

export default AccountPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
    },
  }
}
