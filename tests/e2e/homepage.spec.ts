import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load and display main content', async ({ page }) => {
    await page.goto('/')

    // Check if the page loads
    await expect(page).toHaveTitle(/Modern Web Agency/)

    // Check if navbar is present
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.getByText('Agency')).toBeVisible()

    // Check if main content is present
    await expect(page.getByText('Welcome to Our Web Agency')).toBeVisible()
    await expect(page.getByText('Your one-stop solution for all web development needs.')).toBeVisible()
  })

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/')

    // Test navigation links exist
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('nav')).toBeVisible()
  })
})