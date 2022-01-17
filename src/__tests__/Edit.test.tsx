import * as React from 'react';

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import 'regenerator-runtime/runtime'
import {
  insertBlock,
  getEditedPostContent,
  createNewPost,
  activatePlugin,
  deactivatePlugin
} from "@wordpress/e2e-test-utils";

import Edit from "../edit";

describe("<Edit />", () => {
  test("should display a custom gutenberg block", async () => {
  });

});

describe("Block", () => {
  //file path for plugin
  const plugin = "inpsyde-challenge/inpsyde-challenge.php";
  beforeEach(async () => {
    await activatePlugin(plugin);
  });
  afterEach(async () => {
    await deactivatePlugin(plugin);
  });
  it("Can add block", async () => {
    await createNewPost();
    await insertBlock("Team Members");
    expect(await getEditedPostContent()).toMatchSnapshot();
  });
});