// Hooks
import { useApp } from 'site/hooks/use-app.mjs'
import { useTranslation } from 'next-i18next'
// Dependencies
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Components
import { PageWrapper, ns as pageNs } from 'site/components/wrappers/page.mjs'
import { ns as authNs } from 'site/components/wrappers/auth/index.mjs'
import { ns as newsletterNs } from 'site/components/account/newsletter.mjs'

// Translation namespaces used on this page
const namespaces = [...new Set([...newsletterNs, ...authNs, ...pageNs])]

/*
 * Some things should never generated as SSR
 * So for these, we run a dynamic import and disable SSR rendering
 */
const DynamicAuthWrapper = dynamic(
  () => import('site/components/wrappers/auth/index.mjs').then((mod) => mod.AuthWrapper),
  { ssr: false }
)

const DynamicNewsletter = dynamic(
  () => import('site/components/account/newsletter.mjs').then((mod) => mod.NewsletterSettings),
  { ssr: false }
)

const AccountPage = (props) => {
  const app = useApp(props)
  const { t } = useTranslation(namespaces)
  const crumbs = [
    [t('yourAccount'), '/account'],
    [t('newsletter'), '/account/newsletter'],
  ]

  return (
    <PageWrapper app={app} title={t('newsletter')} crumbs={crumbs}>
      <DynamicAuthWrapper app={app}>
        <DynamicNewsletter app={app} title />
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
