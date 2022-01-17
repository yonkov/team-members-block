<?php
use PHPUnit\Framework\TestCase;

class Inpsyde_Challenge_Test extends TestCase {

	// test post meta
	public function testMetaBoxCLass() {

		// Post meta title should equal the assigned title
		$testClass = new Inpsyde_Challenge_Position_Metabox(
			array(
				'title'   => 'Business Analyst',
				'context' => 'side',
			)
		);
		$this->assertEquals( $testClass->title, 'Business Analyst' );

		// Post meta position value should get overriden
		$this->assertNotEquals( $testClass->context, 'normal' );

	}

	// Post meta title should not be empty
	public function testException() {
		try {
			$testClass = new Inpsyde_Challenge_Position_Metabox( array() );
			$this->$testClass;
			$this->fail( 'Expected Exception has not been raised.' );
		} catch ( Exception $ex ) {
			$this->assertEquals( 'Metabox title not specified.', $ex->getMessage() );
		}

	}

	public function testEmpty(): array {

		$social_links_values = array(
			'ic_fb_field',
			'ic_linkedin_field',
			'ic_xing_field',
			'ic_github_field',
		);

		$this->assertNotEmpty( $social_links_values );

		return $social_links_values;
	}

	/**
	 * @depends testEmpty
	 */
	public function testPush( array $stack ): array {

		array_push( $stack, 'foo' );

		$this->assertSame( 'foo', $stack[ count( $stack ) - 1 ] );

		$this->assertNotEmpty( $stack );

		return $stack;
	}

	/**
	 * @depends testEmpty
	 */
	public function checkArray( array $stack ): array {

		$this->assertContains( 'ic_fb_field', 'ic_linkedin_field', 'ic_xing_field', 'ic_github_field' );

	}

}
