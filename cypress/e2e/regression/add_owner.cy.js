import * as constants from '../../support/constants'
import * as main from '../../e2e/pages/main.page'
import * as owner from '../pages/owners.pages'
import * as addressBook from '../pages/address_book.page'
import { getSafes, CATEGORIES } from '../../support/safes/safesHandler.js'
import * as wallet from '../../support/utils/wallet.js'
import * as createTx from '../pages/create_tx.pages.js'
import * as navigation from '../pages/navigation.page'
import { getEvents, events, checkDataLayerEvents } from '../../support/utils/gtag.js'

let staticSafes = []
const walletCredentials = JSON.parse(Cypress.env('CYPRESS_WALLET_CREDENTIALS'))
const signer = walletCredentials.OWNER_4_PRIVATE_KEY
const signer2 = walletCredentials.OWNER_1_PRIVATE_KEY

describe('Add Owners tests', () => {
  before(async () => {
    staticSafes = await getSafes(CATEGORIES.static)
  })

  beforeEach(() => {
    cy.visit(constants.setupUrl + staticSafes.SEP_STATIC_SAFE_4)
    cy.contains(owner.safeAccountNonceStr, { timeout: 10000 })
  })

  // Added to prod
  it('Verify add owner button is disabled for disconnected user', () => {
    owner.verifyAddOwnerBtnIsDisabled()
  })

  // Added to prod
  it('Verify the Add New Owner Form can be opened', () => {
    wallet.connectSigner(signer)
    owner.openAddOwnerWindow()
  })

  it('Verify error message displayed if character limit is exceeded in Name input', () => {
    wallet.connectSigner(signer)
    owner.openAddOwnerWindow()
    owner.typeOwnerName(main.generateRandomString(51))
    owner.verifyErrorMsgInvalidAddress(constants.addressBookErrrMsg.exceedChars)
  })

  it('Verify that the "Name" field is auto-filled with the relevant name from Address Book', () => {
    cy.visit(constants.addressBookUrl + staticSafes.SEP_STATIC_SAFE_4)
    addressBook.clickOnCreateEntryBtn()
    addressBook.typeInName(constants.addresBookContacts.user1.name)
    addressBook.typeInAddress(constants.addresBookContacts.user1.address)
    addressBook.clickOnSaveEntryBtn()
    addressBook.verifyNewEntryAdded(constants.addresBookContacts.user1.name, constants.addresBookContacts.user1.address)
    cy.visit(constants.setupUrl + staticSafes.SEP_STATIC_SAFE_4)
    wallet.connectSigner(signer)
    owner.openAddOwnerWindow()
    owner.typeOwnerAddress(constants.addresBookContacts.user1.address)
    owner.verifyNewOwnerName(constants.addresBookContacts.user1.name)
  })

  it('Verify that Name field not mandatory', () => {
    wallet.connectSigner(signer)
    owner.openAddOwnerWindow()
    owner.typeOwnerAddress(constants.SEPOLIA_OWNER_2)
    owner.clickOnNextBtn()
    owner.verifyConfirmTransactionWindowDisplayed()
  })

  it(
    'Verify creation, confirmation and deletion of Add owner tx. GA tx_confirm',
    { defaultCommandTimeout: 30000 },
    () => {
      const tx_confirmed = [
        {
          eventLabel: events.txConfirmedAddOwner.eventLabel,
          eventCategory: events.txConfirmedAddOwner.category,
          eventType: events.txConfirmedAddOwner.eventType,
          safeAddress: staticSafes.SEP_STATIC_SAFE_24.slice(6),
        },
      ]
      function step1() {
        // Clean txs in the queue
        cy.visit(constants.transactionQueueUrl + staticSafes.SEP_STATIC_SAFE_24)
        wallet.connectSigner(signer2)
        cy.wait(5000)
        createTx.deleteAllTx()
        navigation.clickOnWalletExpandMoreIcon()
        navigation.clickOnDisconnectBtn()

        cy.visit(constants.setupUrl + staticSafes.SEP_STATIC_SAFE_24)
        wallet.connectSigner(signer2)
        owner.waitForConnectionStatus()
        owner.openAddOwnerWindow()
        owner.typeOwnerAddress(constants.SEPOLIA_OWNER_2)
        createTx.changeNonce(1)
        owner.clickOnNextBtn()
        createTx.clickOnSignTransactionBtn()
        createTx.clickViewTransaction()

        navigation.clickOnWalletExpandMoreIcon()
        navigation.clickOnDisconnectBtn()
        wallet.connectSigner(signer)
      }

      function step2() {
        createTx.clickOnConfirmTransactionBtn()
        createTx.clickOnNoLaterOption()
        createTx.clickOnSignTransactionBtn()

        navigation.clickOnWalletExpandMoreIcon()
        navigation.clickOnDisconnectBtn()
        getEvents()
        checkDataLayerEvents(tx_confirmed)
        wallet.connectSigner(signer2)
        createTx.deleteTx()
      }

      step1()
      cy.get('body').then(($body) => {
        if ($body.find(`button:contains("${createTx.executeStr}")`).length > 0) {
          navigation.clickOnWalletExpandMoreIcon()
          navigation.clickOnDisconnectBtn()
          wallet.connectSigner(signer2)
          createTx.deleteTx()
          cy.wait(5000)
          step1()
          step2()
        } else {
          createTx.clickOnConfirmTransactionBtn()
          createTx.clickOnNoLaterOption()
          createTx.clickOnSignTransactionBtn()

          navigation.clickOnWalletExpandMoreIcon()
          navigation.clickOnDisconnectBtn()
          getEvents()
          checkDataLayerEvents(tx_confirmed)
          wallet.connectSigner(signer2)
          createTx.deleteTx()
        }
      })
    },
  )
})