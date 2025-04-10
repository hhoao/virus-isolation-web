export interface AnchorLink {
  level: number;
  parent?: AnchorLink;
  children?: AnchorLink[];
  name?: string;
  path?: string;
}
export function resolveAnchorLinks() {
  const updatedHeaders: AnchorLink[] = [];

  document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6').forEach((el) => {
    if (el.textContent && el.id) {
      console.log(el.id);
      updatedHeaders.push({
        children: [],
        level: Number(el.tagName[1]),
        name: el.innerText.replace(/\s+#\s*$/, ''),
        path: `#${el.id}`,
      });
    }
  });
  return resolveHeaders(updatedHeaders);
}

export function resolveHeaders(headers: AnchorLink[]) {
  const levels: [number, number] = [1, 6];
  return groupHeaders(headers, levels);
}

function groupHeaders(headers: AnchorLink[], levelsRange: [number, number]) {
  const result: AnchorLink[] = [];

  headers = headers.map((h) => ({ ...h }));
  headers.forEach((h, index) => {
    if (h.level >= levelsRange[0] && h.level <= levelsRange[1]) {
      if (addToParent(index, headers, levelsRange)) {
        result.push(h);
      }
    }
  });

  return result;
}

function addToParent(currIndex: number, headers: AnchorLink[], levelsRange: [number, number]) {
  if (currIndex === 0) {
    return true;
  }

  const currentHeader = headers[currIndex];
  for (let index = currIndex - 1; index >= 0; index--) {
    const header = headers[index];

    if (
      header.level < currentHeader.level &&
      header.level >= levelsRange[0] &&
      header.level <= levelsRange[1]
    ) {
      if (header.children == null) header.children = [];
      header.children.push(currentHeader);
      return false;
    }
  }

  return true;
}
