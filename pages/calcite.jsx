import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Components.module.css";

function Calcite() {
  const [sliderValue, setSliderValue] = useState(50);
  const sliderEl = useRef(null);
  const buttonEl = useRef(null);

  useEffect(() => {
    sliderEl.current.addEventListener(
      "calciteSliderUpdate",
      ({ target: { value } }) => setSliderValue(value)
    );
    buttonEl.current.addEventListener("click", () => setSliderValue(0));
  }, [sliderEl, buttonEl]);

  return (
    <div className={styles.container}>
      <h1>
        NextJS and Calcite
        <calcite-icon icon="banana" suppressHydrationWarning={true} />
      </h1>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      <p>This is my attempt to prerender calcite-components.</p>
      <calcite-slider
        min={1}
        max={100}
        value={sliderValue}
        step={1}
        ref={sliderEl}
        suppressHydrationWarning={true}
      />
      <p>The slider currently has a value of {sliderValue}.</p>
      <calcite-button ref={buttonEl} suppressHydrationWarning={true}>
        Clear
      </calcite-button>
      <ul>
        <li>Assets are not loaded when pre-rendering.</li>
        <li>
          The components initial load also looks really bad. After that it is
          fine.
        </li>
      </ul>

      <calcite-tree lines scale="s">
        <calcite-tree-item>
          <a href="#">Child 1</a>
        </calcite-tree-item>

        <calcite-tree-item expanded>
          <a href="#">Child 2</a>

          <calcite-tree slot="children">
            <calcite-tree-item>
              <a href="#">Grandchild 1</a>
            </calcite-tree-item>

            <calcite-tree-item selected expanded>
              <a href="#">Grandchild 2</a>
              <calcite-tree slot="children">
                <calcite-tree-item selected>
                  <a href="#">Great-Grandchild 1</a>
                </calcite-tree-item>
                <calcite-tree-item selected>
                  <a href="#">Great-Grandchild 2</a>
                </calcite-tree-item>
              </calcite-tree>
            </calcite-tree-item>
          </calcite-tree>
        </calcite-tree-item>
      </calcite-tree>

      <calcite-tree lines scale="m">
        <calcite-tree-item>
          <a href="#">Child 1</a>
        </calcite-tree-item>

        <calcite-tree-item expanded>
          <a href="#">Child 2</a>

          <calcite-tree slot="children">
            <calcite-tree-item>
              <a href="#">Grandchild 1</a>
            </calcite-tree-item>
            <calcite-tree-item selected expanded>
              <a href="#">Grandchild 2</a>
              <calcite-tree slot="children">
                <calcite-tree-item selected>
                  <a href="#">Great-Grandchild 1</a>
                </calcite-tree-item>
                <calcite-tree-item selected>
                  <a href="#">Great-Grandchild 2</a>
                </calcite-tree-item>
              </calcite-tree>
            </calcite-tree-item>
          </calcite-tree>
        </calcite-tree-item>
      </calcite-tree>
    </div>
  );
}

export default Calcite;
