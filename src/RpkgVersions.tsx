import React from "react"

export interface RpkgVersion {
    id: string
    changelog: React.ReactElement
}

export const latest: RpkgVersion = {
    id: "2.13",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Entity/Brick (TEMP/TBLU) Editor:
                    <ul>
                        <li>
                            Added Hitman 2 functionality to the Entity/Brick (TEMP/TBLU) Editor (by adding such functionality to ResourceTool)
                        </li>
                        <li>
                            Added the option to load the Entity/Brick (TEMP/TBLU) Editor in non-recursive mode
                        </li>
                        <li>
                            Restored and moved the expand and collapse all nodes buttons in the Entity/Brick (TEMP/TBLU) Editor
                        </li>
                        <li>
                            The Entity/Brick (TEMP/TBLU) Editor now allows editing of the TEMP’s:
                            <ul>
                                <li>
                                    subEntities: propertyValues
                                </li>
                                <li>
                                    subEntities: postInitPropertyValues
                                </li>
                                <li>
                                    subEntities: platformSpecificPropertyValues
                                </li>
                                <li>
                                    subType
                                </li>
                                <li>
                                    blueprintIndexInResourceHeader
                                </li>
                                <li>
                                    rootEntityIndex
                                </li>
                                <li>
                                    propertyOverrides
                                </li>
                                <li>
                                    externalSceneTypeIndicesInResourceHeader
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Implemented a single progress window/bar when importing all the RPKGs in a folder
                </li>
                <li>
                    Added multi-line IOI hash calculator function in the GUI
                </li>
            </ul>
        </React.Fragment>
    )
}

export const VERSION_2_12: RpkgVersion = {
    id: "2.12",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Entity/Brick (TEMP/TBLU) Editor:
                    <ul>
                        <li>
                            ResourceTool implementation for the Brick Editor
                            which allows full rebuilding (Adding/removing
                            entities coming soon).
                        </li>
                        <li>
                            Generating RPKGs/Saving TEMPs will now only use one
                            single output folder per RPKG base chunk name,
                            instead of splitting files into chunk* and
                            chunk*patch* folders.
                        </li>
                        <li>
                            Implemented a proper progress bar when the TEMP/TBLU
                            files are being recursively loaded.
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_11_2: RpkgVersion = {
    id: "2.11.2",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Significantly improved search result speeds and also added
                    20k, 50k and 100k search options.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_11_1: RpkgVersion = {
    id: "2.11.1",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Fixed a texture color issue involving the extraction and
                    rebuilding of BC7 (0x5A) type textures
                </li>
                <li>
                    Fixed an issue where the hash depends button wasn't working
                    properly on hashes found via the search function
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_10: RpkgVersion = {
    id: "2.10",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    GUI and CLI
                    <ul>
                        <li>
                            Recursive hash dependency extraction
                            <ul>
                                <li>
                                    <code>-extract_all_hash_depends_from</code>{" "}
                                    and{" "}
                                    <code>
                                        -extract_all_hash_depends_prim_models_from
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Direct hashes only dependency extraction
                            <ul>
                                <li>
                                    <code>
                                        -extract_direct_hash_depends_from
                                    </code>{" "}
                                    and{" "}
                                    <code>
                                        -extract_direct_hash_depends_prim_models_from
                                    </code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    GUI
                    <ul>
                        <li>Hash dependency editor</li>
                        <li>Patch archive deletion list editor</li>
                    </ul>
                </li>
                <li>
                    Changed <code>-extract_direct_hash_depends</code> to
                    <code>-extract_direct_hash_depends_from</code> for
                    uniformity
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_9: RpkgVersion = {
    id: "2.9",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 export Models + Textures linked to a TEMP:
                    <ul>
                        <li>
                            GUI:
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Right click a TEMP hash and select
                                            “Extract PRIM Models Linked To
                                            00123456789ABCDE.TEMP to GLB/TGA
                                            file(s)”.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting:
                                    <ul>
                                        <li>
                                            Rebuild menu: “Rebuild Primitive
                                            Models (PRIM/TEXT/TEXD) From Folder”
                                            (RPKG(s) archive(s) will also
                                            automatically generate).
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            CLI:
                            <ul>
                                <li>
                                    <code>
                                        -extract_all_prim_model_of_temp_from
                                    </code>{" "}
                                    and
                                    <code>-rebuild_prim_model_in</code>.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Added error handling to the GUI when rebuilding PRIMs.</li>
                <li>
                    Added interactive mode to rpkg-cli which can be access using
                    the <code>-i</code> argument.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_8: RpkgVersion = {
    id: "2.8",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 Model (PRIM) exporting (Bones will also export but
                    changes won't be reimported) and reimporting with/or without
                    textures:
                    <ul>
                        <li>
                            <strong>GUI:</strong>
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Right click a PRIM hash and select
                                            &quot;Extract 00123456789ABCDE.PRIM
                                            model to GLB/TGA file(s)&quot;.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting
                                    <ul>
                                        <li>
                                            Rebuild menu: &quot;Rebuild
                                            Primitive Models (PRIM/TEXT/TEXD)
                                            From Folder&quot; (RPKG(s)
                                            archive(s) will also automatically
                                            generate).
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>CLI:</strong>
                            <ul>
                                <li>
                                    With textures included:
                                    <ul>
                                        <li>
                                            <code>
                                                -extract_prim_model_from
                                            </code>{" "}
                                            and{" "}
                                            <code>-rebuild_prim_model_in</code>.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Models only:
                                    <ul>
                                        <li>
                                            <code>-extract_prim_from</code> and{" "}
                                            <code>rebuild_prim_in</code>.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Details Tab:
                    <ul>
                        <li>Reverse hash dependencies will appear now.</li>
                    </ul>
                </li>
            </ul>
            <p>
                <br />
            </p>
            <ul>
                <li>
                    <strong>Notes about model modding (Please read)</strong>
                    <ul>
                        <li>
                            Must use Blender and export to the glTF 2.0 GLB
                            format.
                        </li>
                        <li>Do not rename any of the meshes.</li>
                        <li>
                            You can remove the LOD meshes if you wish to rebuild
                            the model without them.
                        </li>
                        <li>
                            New meshes must match the original mesh names and
                            you can not add any extra.
                        </li>
                        <li>
                            Specific export settings needed for models with
                            bones:
                            <ul>
                                <li>
                                    Untick <em>&quot;+Y Up&quot;</em> under the
                                    Transform category and make sure{" "}
                                    <em>
                                        &quot;Include All Bone Influences&quot;
                                    </em>{" "}
                                    is ticked under the Animation category.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_7: RpkgVersion = {
    id: "2.7",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3 Texture exporting and reimporting:
                    <ul>
                        <li>
                            <strong>GUI:</strong>
                            <ul>
                                <li>
                                    Exporting:
                                    <ul>
                                        <li>
                                            Mass export or right click an
                                            individual TEXT hash
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Reimporting
                                    <ul>
                                        <li>
                                            Rebuild menu (RPKG(s) archive(s)
                                            will also automatically generate)
                                        </li>
                                    </ul>
                                </li>
                                <li>Texture viewer for TEXT hashes</li>
                            </ul>
                        </li>
                        <li>
                            <strong>CLI:</strong>
                            <ul>
                                <li>
                                    <code>-extract_text_from</code>,{" "}
                                    <code>-extract_all_text_from</code> and{" "}
                                    <code>-rebuild_text_in</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Brick Editor:
                    <ul>
                        <li>
                            Search feature (Bricks will load slower initially
                            now)
                        </li>
                    </ul>
                </li>
                <li>Fixed bug with rebuilding GFXF files</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_6: RpkgVersion = {
    id: "2.6",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Brick Editor:
                    <ul>
                        <li>
                            Multiple bricks now load if the main TEMP depends on
                            them
                        </li>
                        <li>
                            Recursive TEMP dependencies
                            <ul>
                                <li>
                                    Editor keeps track of what TEMPs you have
                                    edited
                                </li>
                            </ul>
                        </li>
                        <li>
                            H1 &amp; H2 support for entity/brick (TEMP) editing
                        </li>
                        <li>
                            Fixed ZString bug that caused strings with commas in
                            them to crash RPKG
                        </li>
                    </ul>
                </li>
                <li>
                    Models (PRIM):
                    <ul>
                        <li>
                            GLB exporting (glTF 2.0)
                            <ul>
                                <li>
                                    Either by right clicking a PRIM hash or
                                    right clicking a TEMP hash that has PRIM
                                    dependencies
                                </li>
                                <li>
                                    LODs are parsed and will only export the
                                    highest resolution ones
                                </li>
                                <li>No bone or texture support yet</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Added JSON viewer for JSON hashes</li>
                <li>Improved speed of loading RPKGs</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_5: RpkgVersion = {
    id: "2.5",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Implemented preliminary model (PRIM) viewer + exporter to
                    OBJ models
                    <ul>
                        <li>
                            <code>-extract_prim_to_obj_from</code> command in
                            the CLI or you can use the GUI
                        </li>
                    </ul>
                </li>
                <li>
                    HITMAN 3:
                    <ul>
                        <li>Added: enum support for brick files</li>
                        <li>
                            Added: export all global entity coords to CSV file
                            function
                        </li>
                    </ul>
                </li>
                <li>Fixed hash depends showing duplicate hashes</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_4: RpkgVersion = {
    id: "2.4",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    HITMAN 3: Implemented entity/brick (TEMP) file editing
                    (accessed by right clicking on TEMP files)
                </li>
                <li>
                    Added IOI paths to <code>-hash_depends</code> command line
                    argument
                </li>
                <li>Fixed H1 issue again</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_31: RpkgVersion = {
    id: "2.31",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Fixed GFXF rebuilding if the size is different</li>
                <li>Fixed bug with Hitman 2016 RPKGs</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_3: RpkgVersion = {
    id: "2.3",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added GFXF (Scaleform GFX) extraction and rebuilding</li>
                <li>Fixed bug with archive generation in the GUI</li>
                <li>
                    New logo/icon thanks to{" "}
                    <a href="https://twitter.com/dribbleondo">Dribbleondo</a>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_2: RpkgVersion = {
    id: "2.2",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added an audio player for WWEM, WWES and WWEV hashes.</li>
                <li>Added an image viewer for GFXI hashes.</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_1: RpkgVersion = {
    id: "2.1",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added new search GUI search feature where you can search
                    through either:
                    <ul>
                        <li>The currently imported/loaded RPKGs</li>
                        <li>The hash list</li>
                    </ul>
                </li>
                <li>
                    Fixed an issue where the folder selection dialog appeared
                    after clicking cancel on the right click popup menu
                </li>
                <li>Added a horizontal scroll bar to the Details section</li>
                <li>
                    The hash details now displays the known IOI string for each
                    known hash
                </li>
                <li>
                    Added extra error outputs for the localization rebuilding
                    functions when malformed JSONs are input
                </li>
                <li>
                    Added patch archive deletion list for deleted hashes in the
                    &ldquo;Details&rdquo; view for patch archives
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_01: RpkgVersion = {
    id: "2.01",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added roughly 15k new hashes to the hash list thanks to
                    grappigegovert
                </li>
                <li>
                    Fixed issue with the <code>-hash_probe</code> function where
                    output was duplicated when used with multiple filters
                </li>
                <li>
                    Added new <code>-extract_direct_hash_depends</code> function
                    that extracts direct depends to files and meta files
                </li>
                <li>
                    Fixed issue with RPKG Details tab reporting the wrong number
                    of hashes and total hash sizes for RPKGs
                </li>
                <li>
                    Changed the default starting color theme to Dark/Red instead
                    of Light/Blue
                </li>
                <li>
                    Added natural sorting for the RPKG archives when importing
                    by folder or mass extraction
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_2_0: RpkgVersion = {
    id: "2.0",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Completely rewritten, streamlined all the functions, bug
                    fixes, etc&hellip;
                </li>
                <li>
                    Transformed rpkg into a shared solution consisting of a DLL
                    and a CLI component/program + a WPF .NET Framework based GUI
                </li>
                <li>
                    GUI greatly extends the capabilities of rpkg:
                    <ul>
                        <li>Treeview: Resource and hash dependencies</li>
                        <li>
                            Ability to see all details for a given hash,
                            resource type or whole RPKG archive
                        </li>
                        <li>Hex viewer</li>
                        <li>
                            JSON viewer for localisation files containing
                            strings (LOCR, DLGE and RTLV)
                        </li>
                    </ul>
                </li>
                <li>
                    Implemented revorb.exe for WWEM/WWES and WWEV audio file
                    extraction when extracting to ogg
                </li>
                <li>
                    Implemented a master hash list that contains known hashes
                    for all 3 of the HITMAN trilogy games
                    <ul>
                        <li>
                            You can also search for known hashes using this
                            site:{" "}
                            <a href="https://hitmandb.notex.app">
                                https://hitmandb.notex.app
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_3: RpkgVersion = {
    id: "1.3",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added extraction and rebuilding functionality for a variety
                    of resources:
                    <ul>
                        <li>
                            DLGE (Dialog subs) - Includes output specifying the
                            WWES linked to the dialog
                            <ul>
                                <li>
                                    <code>-extract_dlge_to_json_from</code>
                                </li>
                                <li>
                                    <code>-rebuild_dlge_from_json_from</code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            RTLV (Video subs)
                            <ul>
                                <li>
                                    <code>-extract_rtlv_to_json_from</code>
                                </li>
                                <li>
                                    <code>-rebuild_rtlv_from_json_from</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Added extra meta file outputs when using WWES extraction
                    mode
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_22: RpkgVersion = {
    id: "1.22",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Added rpkg.exe command JSON examples</li>
                <li>
                    Fixed ORES extraction issue when no input filter was present
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_2: RpkgVersion = {
    id: "1.2",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added filtering to the ORES WWEV and WWES extraction modes
                </li>
                <li>
                    Implemented a new scripted command interface through the use
                    of JSON files
                </li>
                <li>
                    Enable the use of drag and drag for both RPKG and JSON files
                    directly upon the exe, thereby allowing full control of
                    rpkg.exe without command line interface use
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_11: RpkgVersion = {
    id: "1.11",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added hash probe function (<code>-hash_probe</code>) that
                    allows you to probe RPKG files for the existence of the hash
                    file/resource and provides information.
                </li>
                <li>
                    Added an error message to indicate if a resource was not
                    found when using the <code>-filter</code> function.
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_1: RpkgVersion = {
    id: "1.1",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added the ability to compute an IOI hash from an assembly
                    string
                </li>
                <li>
                    Added extraction and rebuilding functionality for a variety
                    of resources:
                    <ul>
                        <li>
                            WWEV (SFX) - (With partial IOI internal Wwise file
                            paths / names)
                        </li>
                        <li>LOCR (Localisation)</li>
                    </ul>
                </li>
                <li>
                    WWES (Dialog) extraction with full IOI internal Wwise file
                    paths / names
                </li>
                <li>
                    XTEA encryption/decryption for packagedefintion.txt /
                    thumbs.dat
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_03: RpkgVersion = {
    id: "1.03",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Fixed issue preventing perfect 1:1 repacking of previously
                    unpacked RPKG files
                </li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_02: RpkgVersion = {
    id: "1.02",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Added the ability to specify a desired output folder using{" "}
                    <code>-output_path</code>
                </li>
                <li>
                    Fixed an issue limiting importing RPKGs with under 100 hash
                    files/resources
                </li>
                <li>Fixed ORES extraction issue</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1_01: RpkgVersion = {
    id: "1.01",
    changelog: (
        <React.Fragment>
            <ul>
                <li>
                    Decreased the RPKG file import time by an order of magnitude
                </li>
                <li>Fixed issue related to handling multiple input filters</li>
            </ul>
        </React.Fragment>
    ),
}

export const VERSION_1: RpkgVersion = {
    id: "1",
    changelog: (
        <React.Fragment>
            <ul>
                <li>Initial release</li>
            </ul>
        </React.Fragment>
    ),
}

export const versions: RpkgVersion[] = [
    latest,
    VERSION_2_12,
    VERSION_2_11_2,
    VERSION_2_11_1,
    VERSION_2_10,
    VERSION_2_9,
    VERSION_2_8,
    VERSION_2_7,
    VERSION_2_6,
    VERSION_2_5,
    VERSION_2_4,
    VERSION_2_31,
    VERSION_2_3,
    VERSION_2_2,
    VERSION_2_1,
    VERSION_2_01,
    VERSION_2_0,
    VERSION_1_3,
    VERSION_1_22,
    VERSION_1_2,
    VERSION_1_11,
    VERSION_1_1,
    VERSION_1_03,
    VERSION_1_02,
    VERSION_1_01,
    VERSION_1,
]
